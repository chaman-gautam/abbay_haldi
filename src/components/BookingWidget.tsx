"use client";

import React, { useEffect, useRef, useState } from "react";

type Message = {
  type: "bot" | "user";
  text: string;
};

type BookingData = {
  serviceType: string;
  serviceTypeId: string;
  resultType: string;
  recommendedService: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  addOn: string;
};

export default function BookingWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      type: "bot",
      text: "Not sure what to book? I'll help you choose the perfect service ✨",
    },
  ]);

  const [step, setStep] = useState(1);
  const [isTyping, setIsTyping] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "",
    serviceTypeId: "",
    resultType: "",
    recommendedService: "",
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
    addOn: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto scroll to bottom whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Delay helper
  const wait = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  // Add user message
  const addUserMessage = (text: string) => {
    setMessages((prev) => [...prev, { type: "user", text }]);
  };

  // Add bot message with typing effect
  const addBotMessage = async (text: string, delay = 1200) => {
    setIsTyping(true);
    await wait(delay);
    setMessages((prev) => [...prev, { type: "bot", text }]);
    setIsTyping(false);
  };

  // Recommendation logic
  const handleRecommendation = async (result: string) => {
    let service = "";

    if (bookingData.serviceType === "Hair Color") {
      if (result === "Lighter") service = "Full Balayage";
      else if (result === "Natural") service = "Soft Balayage";
      else service = "Full Color";
    } else if (bookingData.serviceType === "Haircut") {
      service = "Classic Haircut";
    } else if (bookingData.serviceType === "Styling") {
      service = "Blow Dry Styling";
    }

    setBookingData((prev) => ({
      ...prev,
      recommendedService: service,
    }));

    await addBotMessage("Analyzing your hair goals...", 1500);
    await addBotMessage("Reviewing the best service option...", 1500);
    await addBotMessage(`I recommend ${service} ✨`, 1200);
    await addBotMessage("Let's find the perfect appointment time.", 1000);

    setStep(4);
  };

  // Submit booking
  const handleBookingSubmit = async () => {
    try {
      setIsSubmitting(true);

      await addBotMessage("Saving your appointment...", 1200);
      await addBotMessage("Sending your confirmation email...", 1500);

      const res = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data.success) {
        await addBotMessage(
          `Your booking request has been received, ${bookingData.name} 🎉`,
          1200,
        );
        setStep(8);
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
      alert("Error submitting booking.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [serviceTypes, setServiceTypes] = useState<any[]>([]);
  const [resultTypes, setResultTypes] = useState<any[]>([]);
  useEffect(() => {
    const fallbackServices = [
      { id: "fallback-1", name: "Hair Color" },
      { id: "fallback-2", name: "Haircut" },
      { id: "fallback-3", name: "Styling" },
    ];

    const fetchServiceTypes = async () => {
      try {
        const res = await fetch("/api/service-types");
        const json = await res.json();

        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setServiceTypes(json.data);
        } else {
          console.warn(
            "No service types returned from database. Using fallback data.",
          );
          setServiceTypes(fallbackServices);
        }
      } catch (error) {
        console.error(
          "Failed to load service types. Using fallback data.",
          error,
        );
        setServiceTypes(fallbackServices);
      }
    };

    fetchServiceTypes();
  }, []);
  useEffect(() => {
    if (!isOpen) {
      // Show after 2 seconds
      const showTimer = setTimeout(() => {
        setShowHint(true);
      }, 2000);

      // Hide after 12 seconds total (2 sec delay + 10 sec visible)
      const hideTimer = setTimeout(() => {
        setShowHint(false);
      }, 22000);

      return () => {
        clearTimeout(showTimer);
        clearTimeout(hideTimer);
      };
    } else {
      // Hide immediately when chat opens
      setShowHint(false);
    }
  }, [isOpen]);
  if (!isOpen) {
    return (
      <>
        {/* Floating Chat Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-[#b38b4d] text-white shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center text-2xl cursor-pointer "
          onMouseEnter={() => setShowHint(true)}
          onMouseLeave={() => setShowHint(false)}
          aria-label="Open Booking Assistant"
        >
          💬
        </button>

        {/* Popup Hint */}
        {showHint && (
          <div
            className="
            fixed bottom-6 right-24 z-40
            bg-white text-gray-800
            px-4 py-3 rounded-xl
            shadow-lg border
            text-sm font-medium
            transition-all duration-500
            animate-slide-in
          "
          >
            Not sure what to book? ✨
            <div className="absolute top-3 -right-2 w-3 h-3 bg-white border-r border-b -rotate-45"></div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 p-4">
      <div className="w-full max-w-md h-[600px] bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden  border-2 border-[#b38b4d]">
        {/* Header */}
        <div className="bg-[#b38b4d] text-white px-5 py-4 flex items-start justify-between">
          <div>
            <h1 className="text-lg font-semibold">Abby Assistant</h1>
            <p className="text-sm opacity-90">
              Your personal booking assistant
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="text-white text-5xl leading-none hover:opacity-80 cursor-pointer"
            aria-label="Close Booking Assistant"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                msg.type === "bot"
                  ? "bg-white border border-gray-200 text-gray-800"
                  : "bg-[#b38b4d] text-white ml-auto"
              }`}
            >
              {msg.text}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-white border border-gray-200 text-gray-500 text-sm italic">
              Abby Assistant is typing...
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Action Area */}
        <div className="p-4 border-t bg-white space-y-2 ">
          {/* STEP 1 */}
          {step === 1 && (
            <button
              onClick={async () => {
                addUserMessage("Start Booking");
                await addBotMessage("What would you like to get done?");
                setStep(2);
              }}
              className="w-full bg-[#b38b4d] text-white py-3 rounded-lg hover:opacity-90 transition cursor-pointer"
            >
              Start Booking
            </button>
          )}

          {/* STEP 2 */}
          {/* STEP 2 */}
          {step === 2 &&
            serviceTypes.map((service) => (
              <button
                key={service.id}
                onClick={async () => {
                  // Save both ID and name
                  setBookingData((prev) => ({
                    ...prev,
                    serviceType: service.name,
                    serviceTypeId: service.id,
                  }));

                  addUserMessage(service.name);

                  try {
                    const res = await fetch(`/api/result-types/${service.id}`);
                    const json = await res.json();

                    if (
                      json.success &&
                      Array.isArray(json.data) &&
                      json.data.length > 0
                    ) {
                      setResultTypes(json.data);
                    } else {
                      // Fallback result types
                      setResultTypes([
                        { id: "fallback-1", name: "Lighter" },
                        { id: "fallback-2", name: "Natural" },
                        { id: "fallback-3", name: "Bold" },
                      ]);
                    }
                  } catch (error) {
                    console.error("Failed to load result types:", error);

                    // Fallback result types
                    setResultTypes([
                      { id: "fallback-1", name: "Lighter" },
                      { id: "fallback-2", name: "Natural" },
                      { id: "fallback-3", name: "Bold" },
                    ]);
                  }

                  await addBotMessage(
                    "What kind of result are you looking for?",
                  );

                  setStep(3);
                }}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                {service.name}
              </button>
            ))}

          {/* STEP 3 */}
          {step === 3 &&
            resultTypes.map((result) => (
              <button
                key={result.id}
                onClick={async () => {
                  setBookingData((prev) => ({
                    ...prev,
                    resultType: result.name,
                    resultTypeId: result.id,
                  }));

                  addUserMessage(result.name);

                  let recommendation: any = null;

                  try {
                    const res = await fetch("/api/recommendation", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        serviceTypeId: bookingData.serviceTypeId,
                        resultTypeId: result.id,
                      }),
                    });

                    const json = await res.json();

                    if (json.success && json.data) {
                      recommendation = json.data;
                    }
                  } catch (error) {
                    console.error("Recommendation fetch failed:", error);
                  }

                  // Fallback recommendation
                  if (!recommendation) {
                    recommendation = {
                      recommended_service: "Full Balayage",
                      duration_minutes: 180,
                      price: 450,
                    };
                  }

                  setBookingData((prev) => ({
                    ...prev,
                    resultType: result.name,
                    recommendedService: recommendation.recommended_service,
                  }));

                  await addBotMessage("Analyzing your hair goals...", 1500);
                  await addBotMessage(
                    "Reviewing the best service option...",
                    1500,
                  );
                  await addBotMessage(
                    `I recommend ${recommendation.recommended_service} ✨`,
                    1200,
                  );
                  await addBotMessage(
                    `Estimated time: ${recommendation.duration_minutes} minutes`,
                    1000,
                  );
                  await addBotMessage(
                    `Approx price: $${recommendation.price}`,
                    1000,
                  );
                  await addBotMessage(
                    "Let's find the perfect appointment time.",
                    1000,
                  );

                  setStep(4);
                }}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                {result.name}
              </button>
            ))}

          {/* STEP 4 */}
          {step === 4 &&
            ["10:00 AM", "1:00 PM", "4:00 PM"].map((slot) => (
              <button
                key={slot}
                onClick={async () => {
                  setBookingData((prev) => ({
                    ...prev,
                    timeSlot: slot,
                  }));

                  addUserMessage(slot);
                  await addBotMessage("Please enter your details.");
                  setStep(5);
                }}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                {slot}
              </button>
            ))}

          {/* STEP 5 */}
          {step === 5 && (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Your Name"
                value={bookingData.name}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 p-3 rounded-lg"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={bookingData.email}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 p-3 rounded-lg"
              />

              <input
                type="text"
                placeholder="Your Phone"
                value={bookingData.phone}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
                className="w-full border border-gray-300 p-3 rounded-lg"
              />

              <button
                onClick={async () => {
                  if (
                    !bookingData.name ||
                    !bookingData.email ||
                    !bookingData.phone
                  ) {
                    alert("Please fill in all fields.");
                    return;
                  }

                  addUserMessage("Entered my details");
                  await addBotMessage(
                    `Thanks, ${bookingData.name}. Would you like to add a treatment?`,
                  );
                  setStep(6);
                }}
                className="w-full bg-[#b38b4d] text-white py-3 rounded-lg cursor-pointer"
              >
                Continue
              </button>
            </div>
          )}

          {/* STEP 6 */}
          {step === 6 &&
            ["Yes", "No"].map((option) => (
              <button
                key={option}
                onClick={() => {
                  setBookingData((prev) => ({
                    ...prev,
                    addOn: option,
                  }));

                  addUserMessage(option === "Yes" ? "Add Treatment" : "Skip");
                  setStep(7);
                }}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer"
              >
                {option === "Yes" ? "Add Treatment" : "Skip"}
              </button>
            ))}

          {/* STEP 7 */}
          {step === 7 && (
            <div className="space-y-3 text-sm">
              <div className="border border-gray-200 bg-gray-50 rounded-lg p-4 space-y-1">
                <p>
                  <strong>Service:</strong> {bookingData.recommendedService}
                </p>
                <p>
                  <strong>Time:</strong> {bookingData.timeSlot}
                </p>
                <p>
                  <strong>Name:</strong> {bookingData.name}
                </p>
                <p>
                  <strong>Email:</strong> {bookingData.email}
                </p>
                <p>
                  <strong>Phone:</strong> {bookingData.phone}
                </p>
                <p>
                  <strong>Add-on:</strong> {bookingData.addOn}
                </p>
              </div>

              <button
                onClick={handleBookingSubmit}
                disabled={isSubmitting || isTyping}
                className="w-full bg-[#b38b4d] text-white py-3 rounded-lg cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </button>
            </div>
          )}

          {/* STEP 8 */}
          {step === 8 && (
            <div className="text-center py-4">
              <p className="text-lg font-semibold text-green-600">
                Appointment Confirmed ✅
              </p>
              <p className="text-sm text-gray-600 mt-2">
                We’ve sent the details to your email.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from "react";

type Message = {
  type: "bot" | "user";
  text: string;
};

type BookingData = {
  serviceType: string;
  resultType: string;
  recommendedService: string;
  timeSlot: string;
  name: string;
  email: string;
  phone: string;
  addOn: string;
};

export default function BookingPage() {
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

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[600px] bg-white shadow-xl rounded-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#b38b4d] text-white px-5 py-4">
          <h1 className="text-lg font-semibold">Abby Assistant</h1>
          <p className="text-sm opacity-90">Your personal booking assistant</p>
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
              className="w-full bg-[#b38b4d] text-white py-3 rounded-lg hover:opacity-90 transition"
            >
              Start Booking
            </button>
          )}

          {/* STEP 2 */}
          {step === 2 &&
            ["Hair Color", "Haircut", "Styling"].map((option) => (
              <button
                key={option}
                onClick={async () => {
                  setBookingData((prev) => ({
                    ...prev,
                    serviceType: option,
                  }));

                  addUserMessage(option);
                  await addBotMessage(
                    "What kind of result are you looking for?",
                  );
                  setStep(3);
                }}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
              >
                {option}
              </button>
            ))}

          {/* STEP 3 */}
          {step === 3 &&
            ["Lighter", "Natural", "Bold"].map((option) => (
              <button
                key={option}
                onClick={async () => {
                  setBookingData((prev) => ({
                    ...prev,
                    resultType: option,
                  }));

                  addUserMessage(option);
                  await handleRecommendation(option);
                }}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
              >
                {option}
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
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
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
                className="w-full bg-[#b38b4d] text-white py-3 rounded-lg"
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
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50"
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
                className="w-full bg-[#b38b4d] text-white py-3 rounded-lg disabled:opacity-50"
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

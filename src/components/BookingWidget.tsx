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
  appointmentDate: string;
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
  const [availableSlots, setAvailableSlots] = useState<any[]>([]);
  const [bookingData, setBookingData] = useState<BookingData>({
    serviceType: "",
    serviceTypeId: "",
    resultType: "",
    recommendedService: "",
    appointmentDate: "",
    timeSlot: "",
    name: "",
    email: "",
    phone: "",
    addOn: "",
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isLoadingOptions, setIsLoadingOptions] = useState(false);
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
  // const handleBookingSubmit = async () => {
  //   try {
  //     setIsSubmitting(true);

  //     await addBotMessage("Saving your appointment...", 1200);
  //     await addBotMessage("Sending your confirmation email...", 1500);

  //     const res = await fetch("/api/booking", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(bookingData),
  //     });

  //     const data = await res.json();

  //     if (data.success) {
  //       await addBotMessage(
  //         `Your booking request has been received, ${bookingData.name} 🎉`,
  //         1200,
  //       );
  //       setStep(8);
  //     } else {
  //       alert("Something went wrong.");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     alert("Error submitting booking.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleBookingSubmit = async () => {
    // Prevent duplicate submissions
    if (isSubmitting) return;

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

      // Handle non-200 responses
      if (!res.ok) {
        let errorMessage = "We couldn't complete your booking right now.";

        try {
          const errorData = await res.json();
          if (errorData?.error) {
            errorMessage = errorData.error;
          }
        } catch {
          // Ignore JSON parsing errors
        }

        await addBotMessage(
          `${errorMessage} Please try again in a few minutes.`,
          1200,
        );

        return;
      }

      const data = await res.json();

      // Handle API success flag
      if (!data.success) {
        await addBotMessage(
          "We couldn't complete your booking right now. Please try again in a few minutes.",
          1200,
        );
        return;
      }

      // Success
      await addBotMessage(
        `Your booking request has been received, ${bookingData.name} 🎉`,
        1200,
      );

      await addBotMessage(
        "We've sent a confirmation email and our team will contact you shortly.",
        1200,
      );

      setStep(8);
    } catch (error) {
      console.error("Booking submission error:", error);

      await addBotMessage(
        "A network error occurred while submitting your booking. Please try again.",
        1200,
      );
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
  // Add at the top of your component

  // Reusable function
  const handleStepChange = async (
    userText: string,
    botText: string,
    nextStep: number,
  ): Promise<void> => {
    // Hard block to prevent multiple clicks instantly
    if (isLoadingOptions) return;

    setIsLoadingOptions(true);

    try {
      // Post user message immediately
      addUserMessage(userText);

      // Explicitly wait for the full duration of the bot message
      await addBotMessage(botText, 2500);

      // Change step only after bot text finishes rendering
      setStep(nextStep);

      // Short buffer to wait for new elements to mount smoothly
      await new Promise<void>((resolve) => setTimeout(resolve, 300));
    } catch (error) {
      console.error("Navigation error:", error);
    } finally {
      // Re-enable clicks only when everything is completely finished
      setIsLoadingOptions(false);
    }
  };
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
        <div
          className={`p-4 border-t border-[#b38b4d] bg-white space-y-2 max-h-64 overflow-y-auto ${
            isLoadingOptions ? "pointer-events-none opacity-60" : ""
          }`}
        >
          {" "}
          {/* STEP 1 */}
          {step === 1 && (
            <button
              onClick={() =>
                void handleStepChange(
                  "Start Booking",
                  "What would you like to get done?",
                  2,
                )
              }
              disabled={isLoadingOptions}
              className="w-full bg-[#b38b4d] text-white py-3 rounded-lg hover:opacity-90 transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Start Booking
            </button>
          )}
          {/* STEP 2 */}
          {step === 2 &&
            serviceTypes.map((service) => (
              <button
                key={service.id}
                onClick={async () => {
                  if (isLoadingOptions) return;
                  setIsLoadingOptions(true);

                  try {
                    setBookingData((prev) => ({
                      ...prev,
                      serviceType: service.name,
                      serviceTypeId: service.id,
                    }));

                    addUserMessage(service.name);

                    try {
                      const res = await fetch(
                        `/api/result-types/${service.id}`,
                      );
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
                    await wait(100);
                  } finally {
                    setIsLoadingOptions(false);
                  }
                }}
                disabled={isLoadingOptions}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {service.name}
              </button>
            ))}
          {/* STEP 2 */}
          {/* {step === 2 &&
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
            ))} */}
          {/* STEP 3 */}
          {step === 3 &&
            resultTypes.map((result) => (
              <button
                key={result.id}
                onClick={async () => {
                  if (isLoadingOptions) return;
                  setIsLoadingOptions(true);

                  try {
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
                      2500,
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
                    await wait(100);
                  } finally {
                    setIsLoadingOptions(false);
                  }
                }}
                disabled={isLoadingOptions}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {result.name}
              </button>
            ))}
          {/* STEP 4 */}
          {/* {step === 4 &&
            ["10:00 AM", "1:00 PM", "4:00 PM"].map((slot) => (
              <button
                key={slot}
                onClick={async () => {
                  if (isLoadingOptions) return;
                  setIsLoadingOptions(true);

                  try {
                    setBookingData((prev) => ({
                      ...prev,
                      timeSlot: slot,
                    }));

                    addUserMessage(slot);
                    await addBotMessage("Please enter your details.");
                    setStep(5);
                    await wait(100);
                  } finally {
                    setIsLoadingOptions(false);
                  }
                }}
                disabled={isLoadingOptions}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {slot}
              </button>
            ))}    */}
          {/* STEP 4 - Select Date and Dynamic Time Slots */}
          {step === 4 && (
            <div className="space-y-3">
              {/* Date Picker */}
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={bookingData.appointmentDate}
                onChange={async (e) => {
                  const selectedDate = e.target.value;

                  // Fallback slots
                  const fallbackSlots = [
                    {
                      id: "fallback-1",
                      time_slot: "10:00 AM",
                      remaining: 3,
                    },
                    {
                      id: "fallback-2",
                      time_slot: "1:00 PM",
                      remaining: 2,
                    },
                    {
                      id: "fallback-3",
                      time_slot: "4:00 PM",
                      remaining: 4,
                    },
                  ];

                  // Save selected date and reset selected time slot
                  setBookingData((prev) => ({
                    ...prev,
                    appointmentDate: selectedDate,
                    timeSlot: "",
                  }));

                  // Clear old slots
                  setAvailableSlots([]);

                  if (!selectedDate) return;

                  try {
                    const res = await fetch(
                      `/api/available-slots?date=${selectedDate}`,
                    );

                    const json = await res.json();

                    if (
                      json.success &&
                      Array.isArray(json.data) &&
                      json.data.length > 0
                    ) {
                      setAvailableSlots(json.data);
                    } else {
                      // Use fallback if no data returned
                      setAvailableSlots(fallbackSlots);
                    }
                  } catch (error) {
                    console.error("Failed to load available slots:", error);

                    // Use fallback if API fails
                    setAvailableSlots(fallbackSlots);
                  }
                }}
                className="w-full border border-gray-300 p-3 rounded-lg"
              />

              {/* Time Slot Buttons */}
              {availableSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={async () => {
                    if (isLoadingOptions) return;
                    setIsLoadingOptions(true);

                    try {
                      setBookingData((prev) => ({
                        ...prev,
                        timeSlot: slot.time_slot,
                      }));

                      addUserMessage(
                        `${bookingData.appointmentDate} - ${slot.time_slot}`,
                      );

                      await addBotMessage("Please enter your details.");

                      setStep(5);
                      await wait(100);
                    } finally {
                      setIsLoadingOptions(false);
                    }
                  }}
                  disabled={isLoadingOptions}
                  className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {slot.time_slot}
                  {slot.remaining > 0 && (
                    <span className="text-xs text-gray-500 ml-2">
                      ({slot.remaining} left)
                    </span>
                  )}
                </button>
              ))}

              {/* No Slots Message */}
              {bookingData.appointmentDate && availableSlots.length === 0 && (
                <div className="text-sm text-red-600 p-3 border border-red-200 rounded-lg bg-red-50">
                  No available time slots for this date. Please choose another
                  date.
                </div>
              )}
            </div>
          )}
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
                  // Trim all values
                  const name = bookingData.name.trim();
                  const email = bookingData.email.trim().toLowerCase();
                  const phone = bookingData.phone.trim();

                  // Name validation
                  if (name.length < 2) {
                    await addBotMessage(
                      "Please enter a valid name (at least 2 characters).",
                    );
                    return;
                  }

                  // Email validation
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (!emailRegex.test(email)) {
                    await addBotMessage("Please enter a valid email address.");
                    return;
                  }

                  // Phone validation
                  // Allows digits, spaces, +, -, (, )
                  const phoneRegex = /^[0-9+\-()\s]{7,20}$/;

                  if (!phoneRegex.test(phone)) {
                    await addBotMessage("Please enter a valid phone number.");
                    return;
                  }

                  // Save cleaned values
                  setBookingData((prev) => ({
                    ...prev,
                    name,
                    email,
                    phone,
                  }));

                  addUserMessage("Entered my details");

                  await addBotMessage(
                    `Thanks, ${name}. Would you like to add a treatment?`,
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
                  if (isLoadingOptions) return;
                  setIsLoadingOptions(true);

                  try {
                    setBookingData((prev) => ({
                      ...prev,
                      addOn: option,
                    }));

                    addUserMessage(option === "Yes" ? "Add Treatment" : "Skip");
                    setStep(7);
                  } finally {
                    setIsLoadingOptions(false);
                  }
                }}
                disabled={isLoadingOptions}
                className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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

// import express from "express";
// const router = express.Router();

// router.post("/", (req, res) => {
//   console.log("Received message:", req.body.message);

//   const { message } = req.body;
//   let reply = "Sorry, I didn’t understand that.";
//   if (message.toLowerCase().includes("hello")) reply = "Hi there 👋";
//   if (message.toLowerCase().includes("price")) reply = "Our rentals start at ₹100/day.";
//   if (message.toLowerCase().includes("help")) reply = "You can ask me about Vehicals, bookings, or payments.";

//   res.json({ reply });
// });


// export default router;

import express from "express";
const router = express.Router();

router.post("/", (req, res) => {
  console.log("Received message:", req.body.message);

  const { message } = req.body;
  let reply =
    "Sorry, I didn’t understand that. 🚲 Could you rephrase your question?";

  const lower = message.toLowerCase();

  // === Greetings & Small Talk ===
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    reply =
      "Hello 👋 Welcome to सfar ! How can I help you today?";
  } else if (lower.includes("how are you")) {
    reply = "I’m doing great 🤖🚴, thanks for asking! How about you?";
  } else if (lower.includes("thank you") || lower.includes("thanks")) {
    reply = "You’re most welcome 🙌 Have a safe ride!";
  }

  // === Price & Rental Info ===
  else if (lower.includes("price") || lower.includes("cost") || lower.includes("rent")) {
    reply =
      "Our rentals start at just ₹100/day for scooters 🛵. Sports bikes and cruisers may cost ₹500–₹1500/day depending on the model.";
  } else if (lower.includes("hour") || lower.includes("time")) {
    reply =
      "Yes ⏱️ we also provide hourly rentals! Scooters start at ₹50/hour, and bikes at ₹100/hour.";
  } else if (lower.includes("offer") || lower.includes("discount")) {
    reply =
      "Lucky you 🍀 We offer **10% off** on weekend bookings and **15% off** for rentals longer than 3 days!";
  }

  // === Bike Availability & Categories ===
  else if (lower.includes("bike") || lower.includes("available")) {
    reply =
      "We currently have 🏍️ scooters (Activa, Dio), sports bikes (Yamaha R15, KTM Duke), and cruisers (Royal Enfield Classic, Jawa). Which one do you prefer?";
  } else if (lower.includes("recommend") || lower.includes("suggest")) {
    reply =
      "If you want city rides 🚦, I suggest a scooter. For long trips 🛣️, go with a Royal Enfield. For speed lovers 💨, Yamaha R15 or KTM Duke is perfect!";
  }

  // === Booking & Process ===
  else if (lower.includes("book") || lower.includes("reservation")) {
    reply =
      "Booking is easy 📝: Go to our *Bookings* page, choose your bike, select the dates, and confirm payment.";
  } else if (lower.includes("pickup") || lower.includes("drop")) {
    reply =
      "You can pick up your bike from our nearest hub 🚏. We also provide **home delivery** and **pickup service** for an extra ₹100.";
  }

  // === Documents & Policies ===
  else if (lower.includes("license") || lower.includes("document")) {
    reply =
      "You’ll need a valid **driving license 🪪** and one government ID proof to rent a bike.";
  } else if (lower.includes("fuel") || lower.includes("petrol")) {
    reply =
      "Bikes come with a full tank ⛽. Please return with the same fuel level, or we may charge refueling costs.";
  } else if (lower.includes("damage") || lower.includes("scratch") || lower.includes("accident")) {
    reply =
      "We provide insurance coverage 🛡️. Minor scratches may not be charged, but major damage costs are the rider’s responsibility.";
  } else if (lower.includes("late") || lower.includes("delay")) {
    reply =
      "Returning late? ⏰ We allow a 30-minute grace period. Beyond that, hourly charges apply.";
  } else if (lower.includes("cancel") || lower.includes("refund")) {
    reply =
      "Cancellations made **24 hours before pickup** get a full refund ✅. Same-day cancellations may have a small fee.";
  }

  // === Payment & Support ===
  else if (lower.includes("pay") || lower.includes("payment") || lower.includes("upi") || lower.includes("card")) {
    reply =
      "We accept UPI, Paytm, Google Pay, debit/credit cards, and net banking 💳. Cash is accepted at select hubs.";
  } else if (lower.includes("support") || lower.includes("contact") || lower.includes("help")) {
    reply =
      "You can reach our support 📞 at +91-8434199006 or email us at support@safarrentals.com. I’m also here to answer common questions!";
  }

  res.json({ reply });
});

export default router;

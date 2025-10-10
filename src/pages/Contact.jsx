// src/pages/Contact.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Küldés folyamatban...");

    emailjs
      .sendForm(
        "service_ezg70on",       // Service ID
        "template_uom0epa",      // Template ID
        form.current,
        "Np882GePBAifcVABV"      // Public key
      )
      .then(
        () => {
          setStatus("Sikeresen elküldve ✅");
          form.current.reset();
        },
        (error) => {
          console.error("EmailJS hiba:", error);
          setStatus("Hiba történt az üzenet küldésekor ❌");
        }
      );
  };

  return (
    <section className="py-12 max-w-xl mx-auto">
      <h1 className="text-3xl font-serifFancy text-brandRed">Kapcsolat</h1>
      <p className="mt-2 text-[#5A4028]/70">
        Írj nekem bátran, ha szeretnél együtt dolgozni vagy kérdésed van!
      </p>

      <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm text-[#5A4028]/80 mb-1">Név</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brandRed focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#5A4028]/80 mb-1">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brandRed focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-[#5A4028]/80 mb-1">Üzenet</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brandRed focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-brandRed text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Üzenet küldése
        </button>
      </form>

      {status && (
        <p className="mt-4 text-sm text-[#5A4028]/80 text-center">{status}</p>
      )}
    </section>
  );
}

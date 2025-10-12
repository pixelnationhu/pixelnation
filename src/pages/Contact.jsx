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
      <h1 className="text-3xl font-serif text-center mb-8">Kapcsolat</h1>
      <p className="mt-4 text-sm text-[#5A4028]/80 dark:text-[#E8E6E3]/90 max-w-xl">
        Írj nekem bátran, ha szeretnél együtt dolgozni vagy kérdésed van!
      </p>

      <form ref={form} onSubmit={sendEmail} className="mt-6 space-y-4">
        <div>
          <label className="px-4 py-2 rounded border border-[#3b2a20]/20 dark:border-[#E8E6E3]/30 bg-white dark:bg-[#2A3C3C] text-[#3b2a20] dark:text-[#E8E6E3] hover:bg-[#f9f4ef] dark:hover:bg-[#375E5D] transition-colors duration-300">Név</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brandRed focus:outline-none"
          />
        </div>

        <div>
          <label className="px-4 py-2 rounded border border-[#3b2a20]/20 dark:border-[#E8E6E3]/30 bg-white dark:bg-[#2A3C3C] text-[#3b2a20] dark:text-[#E8E6E3] hover:bg-[#f9f4ef] dark:hover:bg-[#375E5D] transition-colors duration-300">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brandRed focus:outline-none"
          />
        </div>

        <div>
          <label className="px-4 py-2 rounded border border-[#3b2a20]/20 dark:border-[#E8E6E3]/30 bg-white dark:bg-[#2A3C3C] text-[#3b2a20] dark:text-[#E8E6E3] hover:bg-[#f9f4ef] dark:hover:bg-[#375E5D] transition-colors duration-300">Üzenet</label>
          <textarea
            name="message"
            required
            rows="5"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-brandRed focus:outline-none resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-4 py-2 rounded bg-brandRed text-white dark:bg-[#6B8E8E] dark:hover:bg-[#5C7A7A] dark:text-white transition duration-300 rounded px-4 py-2 text-white hover:bg-[#a60e0e] transition-colors duration-300"
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

// src/pages/Contact.tsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "your_service_id",      // 🔹 Replace with your Service ID
          "your_template_id",     // 🔹 Replace with your Template ID
          form.current,
          "your_public_key"       // 🔹 Replace with your Public Key
        )
        .then(
          () => {
            setStatus("✅ Message sent successfully!");
            form.current?.reset();
          },
          (error:any) => {
            setStatus("❌ Failed to send message. Try again.");
            console.error(error.text);
          }
        );
    }
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <div className="bg-green-700 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="mt-2 text-lg">We’d love to hear from you</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Contact Form */}
        <div className="bg-white p-8 shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="from_name"
                required
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="from_email"
                required
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows={4}
                required
                className="mt-1 w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold"
            >
              Send Message
            </button>
          </form>

          {/* Status Message */}
          {status && <p className="mt-4 text-center text-sm">{status}</p>}
        </div>

        {/* Right - Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-6">Our Office</h2>
            <p className="mb-4 text-gray-700">
              <strong>Address:</strong> 123 Green Market Road, Coimbatore, TN, India
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Phone:</strong> +91 98765 43210
            </p>
            <p className="mb-4 text-gray-700">
              <strong>Email:</strong> contact@hitheagro.com
            </p>
          </div>

          {/* Google Map */}
          <div className="mt-8">
            <iframe
              title="Company Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.660449166982!2d76.9558321147429!3d11.016844192153494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a59e3fca13%3A0xb0d8714c31289c0a!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
              className="rounded-lg shadow"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

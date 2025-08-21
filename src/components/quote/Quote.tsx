import React, { useState } from "react";
import { productsData } from "../../data/products"; // optional: your products list
import { QuoteForm } from "../../types/DataTypes";

const WEBAPP_URL = "YOUR_GOOGLE_SCRIPT_WEBAPP_URL"; // <-- REPLACE THIS

export default function Quote() {
  const [form, setForm] = useState<QuoteForm>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    country: "",
    productId: productsData?.[0]?.id ?? "", // default to first product if available
    quantity: "",
    incoterm: "FOB",
    shipmentMode: "Air",
    preferredDate: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const incoterms = ["FOB", "CIF", "CFR", "EXW", "CIP"];
  const shipmentModes = ["Air", "Sea (Reefer/FCL)", "Sea (LCL)", "Road"];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    setErrorMsg(null);
    if (!form.companyName.trim()) return "Company name is required";
    if (!form.contactName.trim()) return "Contact person is required";
    if (!form.email || !/^\S+@\S+\.\S+$/.test(form.email)) return "Valid email is required";
    if (!form.phone || form.phone.trim().length < 7) return "Valid phone/WhatsApp number is required";
    if (!form.country.trim()) return "Destination country is required";
    if (!form.productId) return "Please select a product";
    if (!form.quantity.trim()) return "Please enter approximate quantity";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const v = validate();
    if (v) {
      setErrorMsg(v);
      return;
    }

    setLoading(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    // Prepare payload
    const payload = {
      type: "get-quote",
      timestamp: new Date().toISOString(),
      ...form,
      productName: productsData.find((p) => p.id === form.productId)?.title ?? form.productId,
    };

    try {
      const res = await fetch(WEBAPP_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Server returned an error");
      }

      setSuccessMsg("✅ Your request has been received. We will contact you shortly.");
      setForm({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        country: "",
        productId: productsData?.[0]?.id ?? "",
        quantity: "",
        incoterm: "FOB",
        shipmentMode: "Air",
        preferredDate: "",
        message: "",
      });
    } catch (err: any) {
      console.error(err);
      setErrorMsg("Failed to send inquiry. Please try again or email info@hitheagro.com");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Request a Quote</h1>
        <p className="text-gray-600 mb-8">
          Fill in the details below and we'll send a tailored quote for your export requirement. Prefer WhatsApp or direct email? Use +91 98xxxxxx or info@hitheagro.com.
        </p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-6">
          {errorMsg && <div className="text-red-700 bg-red-100 p-3 rounded">{errorMsg}</div>}
          {successMsg && <div className="text-green-800 bg-green-100 p-3 rounded">{successMsg}</div>}

          {/* Row 1: Company / Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
              placeholder="Company Name"
              className="input-field"
              required
            />
            <input
              name="contactName"
              value={form.contactName}
              onChange={handleChange}
              placeholder="Contact Person"
              className="input-field"
              required
            />
          </div>

          {/* Row 2: Email / Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              type="email"
              className="input-field"
              required
            />
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone / WhatsApp (include country code)"
              className="input-field"
              required
            />
          </div>

          {/* Row 3: Country / Product */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="country"
              value={form.country}
              onChange={handleChange}
              placeholder="Destination Country (e.g., UAE)"
              className="input-field"
              required
            />

            <select name="productId" value={form.productId} onChange={handleChange} className="input-field">
              {productsData.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title}
                </option>
              ))}
            </select>
          </div>

          {/* Row 4: Quantity / Incoterm */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="Approx. Quantity (e.g., 1000 kg)"
              className="input-field"
              required
            />

            <select name="incoterm" value={form.incoterm} onChange={handleChange} className="input-field">
              {incoterms.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>
          </div>

          {/* Row 5: Shipment mode / Preferred date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="shipmentMode" value={form.shipmentMode} onChange={handleChange} className="input-field">
              {shipmentModes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>

            <input
              name="preferredDate"
              value={form.preferredDate}
              onChange={handleChange}
              type="date"
              className="input-field"
            />
          </div>

          {/* Message */}
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Additional details (quality, packaging preferences, target price, etc.)"
            className="w-full min-h-[120px] p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-200"
          />

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Request Quote"}
            </button>

            <button
              type="button"
              onClick={() => {
                // reset
                setForm({
                  companyName: "",
                  contactName: "",
                  email: "",
                  phone: "",
                  country: "",
                  productId: productsData?.[0]?.id ?? "",
                  quantity: "",
                  incoterm: "FOB",
                  shipmentMode: "Air",
                  preferredDate: "",
                  message: "",
                });
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className="border border-gray-300 px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Reset
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-2">
            By sending this request you agree we may contact you about your enquiry. For attachments or detailed specs, email <strong>info@hitheagro.com</strong>.
          </p>
        </form>
      </div>
    </main>
  );
}

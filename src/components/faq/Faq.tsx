import { useState } from "react";

const faqs = [
  {
    question: "What products do you export?",
    answer:
      "We export fresh garlic, vegetables, and multiple agro products directly from farms in Nilgiris, India.",
  },
  {
    question: "Do you support international buyers?",
    answer:
      "Yes, we ship globally and handle all export documentation for hassle-free transactions.",
  },
  {
    question: "What shipping methods are available?",
    answer:
      "We provide air, sea, and road shipping options depending on the buyer’s requirements.",
  },
  {
    question: "Can you handle bulk orders?",
    answer:
      "Absolutely. With 150+ farmers and multiple seller partners, we are well equipped for large-scale exports.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "Each product undergoes strict quality checks and packaging inspections before shipping.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg shadow-sm">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left px-4 py-3 flex justify-between items-center"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <span className="text-green-600 font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

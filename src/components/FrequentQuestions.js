"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How does Peak work?",
    answer: "Peak works by providing a structured plan to achieve your wellness goals through personalized insights and recommendations."
  },
  {
    question: "Who are the providers of Peak?",
    answer: "Peak partners with certified professionals and experts in various fields to ensure quality services."
  },
  {
    question: "Does Peak require insurance?",
    answer: "No, Peak does not require insurance. However, certain services may be covered by your insurance."
  },
  {
    question: "What states is Peak available in?",
    answer: "Peak is available in multiple states across the U.S. Please check our website for the full list of states."
  }
];

export default function FrequentQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-main-wrapper">
      <div className="container">
        <h2 className="faq-title">Have questions? Get answers</h2>
        <div className="accordion-wrapper">
          {faqs.map((faq, index) => (
            <div key={index} className="accordion">
              <button
                onClick={() => toggleAccordion(index)}
                className="accordion-toggle"
              >
                <span className="accordion-question">{faq.question}</span>
                <span className="accordion-icon">
                  {openIndex === index ? (
                    <span className="accordion-btn">-</span>
                  ) : (
                    <span className="accordion-btn">+</span>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <p className="accordion-content">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

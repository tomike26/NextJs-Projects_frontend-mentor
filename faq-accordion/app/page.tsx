"use client"
import { useState } from "react";
import faqs from "../util/faqs";


interface FAQ {
  question: string;
  answer: string;
}

export default function Home() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="faq-accordions">
      <div className="faq-section">
        <div className="faq-header">
          <img src="./images/icon-star.svg" />
          <h1>FAQs</h1>
        </div>
        {faqs.map((faq: FAQ, index: number) => (
          <div className="faq-questions" key={index}>
            <div
              className={`faq-wrapper ${expanded === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
            >
              <p>{faq.question}</p>
              <img
                src={
                  expanded === index
                    ? "./images/icon-minus.svg"
                    : "./images/icon-plus.svg"
                }
                alt={expanded === index ? "Collapse" : "Expand"}
              />
            </div>

            <div className={`faq-answer ${expanded === index ? "active" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

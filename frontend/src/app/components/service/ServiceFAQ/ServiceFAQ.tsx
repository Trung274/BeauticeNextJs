'use client'

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import { FAQData } from '@/app/data';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
  }

  const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="border-b border-[#091156]">
    <button
      className="w-full py-5 text-left flex justify-between items-center"
      onClick={toggleOpen}
    >
      <span className="text-lg font-medium text-[#091156]">{question}</span>
      {isOpen ? (
        <ChevronUp className="text-[#091156]" />
      ) : (
        <ChevronDown className="text-[#091156]" />
      )}
    </button>
    {isOpen && (
      <div className="pb-5 px-9 bg-[#F6F7FF] text-[#8B8B8B]">
        <p>{answer}</p>
      </div>
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-3xl font-bold text-center text-[#091156] mb-2">Services FAQ's</div>
      <div className="w-16 h-1 bg-[#FF64AE] mx-auto mb-8"></div>
      {FAQData.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openIndex}
          toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
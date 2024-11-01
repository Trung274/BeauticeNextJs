'use client'

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import LineTittle from '@/public/assets/LineTittle.svg';
import { FAQData } from '@/app/data';

interface FAQItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => (
  <div className="faq-item-wrapper">
    <div className={`faq-item ${!isOpen ? '-mb-8' : ''}`}>
      <button
        className={`w-full pt-[37px] mb-2 text-left flex justify-between items-center ${isOpen ? 'border-b border-[#091156]' : ''}`}
        onClick={toggleOpen}
      >
        <div className="question-wrapper">
          <span className="text-lg ml-[34px] tracking-[0.035em] font-medium text-[#091156]">{question}</span>
        </div>
        <div className="icon-wrapper">
          {isOpen ? (
            <ChevronUp className="text-[#091156] mt-3 mr-5" />
          ) : (
            <ChevronDown className="text-[#091156] mt-3 mr-5" />
          )}
        </div>
      </button>
      {isOpen && (
        <div className="answer-outer-wrapper">
          <div className="bg-[#F6F7FF] rounded-b-[25px] w-full">
            <div className="answer-inner-wrapper">
              <div className="max-w-4xl mx-auto py-[53px] px-[34px] text-sm tracking-widest italic text-[#8B8B8B]">
                <div className="answer-content ml-1">
                  {Array.isArray(answer) ? (
                    answer.map((paragraph, index) => (
                      <p key={index} className={index > 0 ? 'mt-6' : ''}>
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p>{answer}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-container max-w-[1003px] mx-auto px-4">
      <div className="header-wrapper">
        <div className="title-wrapper">
          <div className="text-4xl ml-2 font-bold text-center text-[#091156]">Services FAQ's</div>
        </div>
        <div className="line-title-wrapper flex justify-center mt-5">
          <div className="line-title-inner">
            <Image 
              src={LineTittle}
              alt="Title Underline"
              width={40}
              height={0}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="faq-items-wrapper mt-6">
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
    </div>
  );
};

export default FAQ;
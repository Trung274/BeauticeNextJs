'use client'

import React, { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import LineTittle from '../../../../public/assets/LineTittle.svg';
import { FAQData } from '@/app/data';

interface FAQItemProps {
  question: string;
  answer: string | string[];
  isOpen: boolean;
  toggleOpen: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleOpen }) => (
  <div className={`${!isOpen ? '-mb-7' : ''}`}>
    <button
      className={`w-full py-5 text-left flex justify-between items-center ${isOpen ? 'border-b border-[#091156] pb-3' : ''}`}
      onClick={toggleOpen}
    >
      <span className="text-lg mt-[15px] ml-[34px] tracking-[0.035em] font-medium text-[#091156]">{question}</span>
      {isOpen ? (
        <ChevronUp className="text-[#091156] mt-3 mr-5" />
      ) : (
        <ChevronDown className="text-[#091156] mt-3 mr-5" />
      )}
    </button>
    {isOpen && (
      <div className="pb-5 ml-10 pt-[53px] text-sm tracking-widest italic px-9 bg-[#F6F7FF] text-[#8B8B8B] mb-8 xl:max-w-4xl">
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
    )}
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-[1003px] mx-auto px-4 py-12">
      <div className="text-4xl ml-2 font-bold text-center text-[#091156] mb-2">Services FAQ's</div>
      <div className="flex justify-center mb-8">
        <Image 
          src={LineTittle}
          alt="Title Underline"
          width={40}
          height={0}
          className="object-contain mt-[10px]"
        />
      </div>
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
'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SOCIAL_LINKS } from '@/app/data';

const Connect = () => {
  return (
    <div className="bg-white p-6 rounded-[25px] shadow-md max-w-[350px] xl:mt-24">
      <div className="text-base xl:ml-6 xl:mt-5 font-bold text-[#091156]">Social Connect</div>
      <div className="flex space-x-4 mb-11">
        {SOCIAL_LINKS.map((social) => (
  <Link
    key={social.name}
    href={social.url}
    target="_blank"
    rel="noopener noreferrer"
    className="transition-transform hover:scale-110 focus:outline-none"
  >
    <Image
      src={social.icon}
      alt={social.name}
      width={80}
      height={80}
      className="text-[#091156]"
    />
    <span className="sr-only">{social.name}</span>
  </Link>
))}
      </div>
    </div>
  );
};

export default Connect;
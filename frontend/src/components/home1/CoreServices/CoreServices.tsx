'use client'

import React from 'react';
import Services from './ServieCard';
import { Section, SectionTitle, MainHeading, SubHeading } from '@/styles/common.styles';
import tw from 'twin.macro';

const CoreServices: React.FC = () => (
  <Section css={tw`gap-y-6`}>
    <div className="flex flex-col">
      <SectionTitle css={tw`pt-[4px] ml-1`}>Main Services</SectionTitle>
      <MainHeading css={tw`pt-[10px] leading-tight`}>
        Learn services to focus <br />
        on your beauty
      </MainHeading>
      <SubHeading css={tw`pt-[19px] max-w-5xl mx-auto xl:-mb-12`}>
        Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa. Non parturient <br className="hidden sm:inline" /> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
      </SubHeading>
    </div>
    <div className="flex flex-wrap justify-center gap-8 p-6">
      <Services />
    </div>
  </Section>
);

export default CoreServices;
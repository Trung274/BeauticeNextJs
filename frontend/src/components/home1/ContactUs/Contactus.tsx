'use client'

import React from 'react'
import AnimationContactUs from '@/public/assets/AnimationContactUs'
import ContactUsForm from './ContactForm'
import { FlexContainer, FlexRow, SectionTitle, MainHeading, SubHeading } from '@/styles/common.styles'
import tw from 'twin.macro'

const ContactUs: React.FC = () => (
  <FlexContainer css={tw`mb-28`}>
    <FlexRow>
      <div className="flex max-md:w-full xl:-ml-3 mt-[161px] relative xl:right-[6px] max-xl:justify-center">
        <AnimationContactUs />
      </div>

      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-5 xl:pl-24">
          <SectionTitle css={tw`-ml-[2px]`}>Contact Us</SectionTitle>
          <MainHeading css={tw`-mt-2 -ml-[2px]`}>
            <span className="block">Send your inquiry to</span>
            <span className="block">our expert team</span>
          </MainHeading>
          <SubHeading css={tw`-mt-[2px] -ml-1 pl-1 mb-[12px]`}>
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </SubHeading>
          <div className='flex flex-col items-center pt-4 xl:-mr-[19px]'>
            <ContactUsForm />
          </div>
        </div>
      </div>
    </FlexRow>
  </FlexContainer>
)

export default ContactUs
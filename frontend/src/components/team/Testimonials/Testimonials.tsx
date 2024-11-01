// Testimonials.tsx
'use client'

import React, { useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { Star } from 'lucide-react';
import ArrowLeftIcon from '@/public/assets/arrow-left.svg';
import ArrowRightIcon from '@/public/assets/arrow-right.svg';
import { RootState } from '@/app/store';
import { 
  nextTestimonial, 
  previousTestimonial,
  setAutoPlaying 
} from '@/app/testimonialSlice';

const AUTO_SLIDE_INTERVAL = 5000; // 5 seconds

const Testimonials = () => {
  const dispatch = useDispatch();
  const { testimonials, currentIndex, isAutoPlaying } = useSelector(
    (state: RootState) => state.testimonial
  );
  const currentTestimonial = testimonials[currentIndex];
  const timeoutRef = useRef<NodeJS.Timeout>();

  // Reset auto-slide timer
  const resetTimer = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    if (isAutoPlaying) {
      timeoutRef.current = setTimeout(() => {
        dispatch(nextTestimonial());
      }, AUTO_SLIDE_INTERVAL);
    }
  }, [dispatch, isAutoPlaying]);

  // Set up auto-sliding
  useEffect(() => {
    resetTimer();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying, resetTimer]);

  // Handle user interaction
  const handleInteraction = () => {
    dispatch(setAutoPlaying(false));
    // Resume auto-play after 10 seconds of no interaction
    setTimeout(() => {
      dispatch(setAutoPlaying(true));
    }, 10000);
  };

  const handlePrevious = () => {
    handleInteraction();
    dispatch(previousTestimonial());
  };

  const handleNext = () => {
    handleInteraction();
    dispatch(nextTestimonial());
  };

  return (
    <div className="container mx-auto px-4 py-16 relative">
      <div className="flex flex-col gap-4 text-center justify-center self-center">
        <p className="text-base text-center font-semibold text-[#FF64AE] xl:pt-[5px]">
          Our Testimonials
        </p>
        <h2 className="text-3xl text-center sm:text-4xl font-semibold text-[#091156] xl:-mt-1">
          What our customer says
        </h2>
        <p className="text-base text-center tracking-widest font-light text-[#8B8B8B] xl:mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </p>

        <div className="flex justify-center m-12">
          <Image
            src={currentTestimonial.avatar}
            alt={currentTestimonial.name}
            width={73}
            height={73}
            className="rounded-full"
          />
        </div>

        <div className="max-w-3xl mx-auto text-center mb-9">
          <p className="text-sm text-center tracking-widest font-light text-[#8B8B8B] xl:-mt-5 xl:leading-[21px]">
            {currentTestimonial.comment.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}<br />
              </React.Fragment>
            ))}
          </p>
        </div>

        <div className="flex justify-center mb-8 space-x-3">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-6 h-6 ${
                i < currentTestimonial.rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              } xl:-mt-[18px]`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center absolute left-0 right-0 top-1/2 px-6 sm:px-12 md:px-24 lg:px-36 xl:px-[197px] xl:mt-[67px]">
          <button 
            className="p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={handlePrevious}
          >
            <Image 
              src={ArrowLeftIcon} 
              alt="Previous"
              width={25}
              height={25}
            />
          </button>
          <button 
            className="p-2 rounded-full hover:bg-gray-300 transition-colors"
            onClick={handleNext}
          >
            <Image 
              src={ArrowRightIcon} 
              alt="Next"
              width={25}
              height={25}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
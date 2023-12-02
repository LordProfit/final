"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from 'framer-motion';
import { useState } from 'react';



// counter
import CountUp from 'react-countup';
import { fadeIn } from '/variants';

const AchievementsSection = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return (
    <div className='container justify-between h-full py-32 text-center bg-primary/30 xl:text-left'>
      {/* text */}
        <div className='flex flex-col justify-center flex-1'>
         
          {/* counters */}
          <motion.div
            variants={fadeIn('right', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden mx-auto mb-8 text-secondary-600 md:flex md:max-w-xl xl:max-w-none xl:mx-0'
          >
            <div className='flex flex-1 xl:gap-x-6'>
              {/* experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='mb-2 text-2xl font-extrabold xl:text-4xl text-secondary'>
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of experience
                </div>
              </div>
              {/* clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='mb-2 text-2xl font-extrabold xl:text-4xl text-accent'>
                  <CountUp start={0} end={278} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied clients
                </div>
              </div>
              {/* projects */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='mb-2 text-2xl font-extrabold xl:text-4xl text-accent'>
                  <CountUp start={0} end={253} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Total projects
                </div>
              </div>
              {/* awards */}
              <div className='relative flex-1'>
                <div className='mb-2 text-2xl font-extrabold xl:text-4xl text-accent'>
                  <CountUp start={0} end={21} duration={5} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Tokens Launched
                </div>
              </div>
            </div>
          </motion.div>
      </div>
     </div>
  );
}    
export default AchievementsSection;

'use client'
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import Navbar from '../navbar/Navbar';
import {motion} from 'framer-motion';
import { usePathname } from 'next/navigation';

const TransitionProvider = ({ children }) => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode='wait'>
      <div key={pathName} className="wrapper">
        <motion.div
          className='motionWrapper'
          animate={{ height: '0vh'}}
          exit={{ height: '140vh'}}
          transition={{ duration: 0.5, ease: 'easeOut'}}
        />

        <motion.div
          className='motionPathName'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity:0 }}
          transition={{ duration: 0.8, ease: 'easeOut'}}
        >
          {pathName.substring(1)}
        </motion.div>


        <motion.div
          className='motionWrapperEnd'
          initial={{ height: '140vh'}}
          animate={{ height: '0vh', transition: { delay: 0.5 }}}
        />
        <Navbar />
          <div className="container">
            {children}
          </div>
      </div>

    </AnimatePresence>
    
  )
}

export default TransitionProvider
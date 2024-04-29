'use client'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './contact.module.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const text = 'Say hello';
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
    .sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY,
    )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
    className={styles.motionWrapper}
    initial={{ y: '-200vh'}}
    animate={{ y: '0%' }}
    transition={{ duration: 1}}
  >
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <motion.div>
          {text.split('').map((letter,index) => (
            <motion.span
              key={index}
              initial={{ opacity: 1}}
              animate={{ opacity: 0 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            >
              {letter}
            </motion.span>
          ))}
          😊
        </motion.div>
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <span>Dear, Olena Hapon</span>
          <textarea rows="6" name='user_message' />
          <span>My email address is:</span>
          <input type="text" name='user_email' />
          <span>Regards</span>
          <button className={styles.button}>Send</button>
          {success && <div className={styles.success}>You message has been sent successfully!</div>}
          {error && <div className={styles.error}>Something went wrong!</div>}
        </form>
      </div>
    </div>
  </motion.div>
  )
}

export default Contact
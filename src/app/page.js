'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className={styles.motionWrapper}
      initial={{ y: '-200vh'}}
      animate={{ y: '0%' }}
      transition={{ duration: 1}}
    >
      <div className={styles.wrapper}>
      {/* IMAGE CONTAINER */}
      <div className={styles.imgContainer} >
        <Image src='./7083598.jpg' alt='girl' sizes='100%' fill />
      </div>

      {/* TEXT CONTAINER */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Hi, I'm Olena!</h1>
        <h2 className={styles.title}>I'm a  Frontend Developer.</h2>
        <h3 className={styles.desc}>My portrfolio is not so big, but show cases a diverse collection of my projects.</h3>
        <div className={styles.buttons}>
          <button className={styles.button}>View My Work</button>
          <button className={styles.button}>Contact Me</button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

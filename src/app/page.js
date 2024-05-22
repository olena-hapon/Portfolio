'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from 'framer-motion';
import Link from "next/link";

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
        <h1 className={styles.title}>I'm a  Frontend Developer.</h1>
        <h3 className={styles.desc}>My portrfolio is not so big, but showcases a diverse collection of projects.</h3>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <Link href={'/portfolio'}>View My Work</Link>
          </button>
          <button className={styles.button}>
            <Link href={'/contact'}>Contact me</Link>
          </button>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

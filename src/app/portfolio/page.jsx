'use client'
import React, { useRef } from 'react';
import styles from './portfolio.module.css';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const items = [
  {
    id: 1,
    color: 'from-red-300 to-blue-300',
    title: 'React Phone Catalog',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus necessitatibus reprehenderit officia distinctio id accusantium eos assumenda corporis. Suscipit aliquam nobis provident neque enim? Dicta doloribus corporis recusandae dolores esse',
    img: './react-store.png',
    link: 'https://olena-hapon.github.io/react_phone-catalog/',
  },
  {
    id: 2,
    color: 'from-blue-300 to-violet-300',
    title: 'React Desire Store',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus necessitatibus reprehenderit officia distinctio id accusantium eos assumenda corporis. Suscipit aliquam nobis provident neque enim? Dicta doloribus corporis recusandae dolores esse',
    img: './desire.png',
    link: 'https://olena-hapon.github.io/desire-store/',
  },
  {
    id: 3,
    color: 'from-violet-300 to-purple-300',
    title: 'Dia',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus necessitatibus reprehenderit officia distinctio id accusantium eos assumenda corporis. Suscipit aliquam nobis provident neque enim? Dicta doloribus corporis recusandae dolores esse',
    img: './dia.png',
    link: 'https://olena-hapon.github.io/layout_dia/',
  },
  {
    id: 4,
    color: 'from-purple-300 to-red-300',
    title: 'React Todo App',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus necessitatibus reprehenderit officia distinctio id accusantium eos assumenda corporis. Suscipit aliquam nobis provident neque enim? Dicta doloribus corporis recusandae dolores esse',
    img: './todoApp.png',
    link: 'https://olena-hapon.github.io/react_todo-app/',
  },
  {
    id: 5,
    color: 'from-red-300 to-blue-300',
    title: 'Miami',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus necessitatibus reprehenderit officia distinctio id accusantium eos assumenda corporis. Suscipit aliquam nobis provident neque enim? Dicta doloribus corporis recusandae dolores esse',
    img: './miami.png',
    link: 'https://olena-hapon.github.io/layout_miami/',
  },
  {
    id: 6,
    color: 'from-red-300 to-blue-300',
    title: 'Game 2048',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus necessitatibus reprehenderit officia distinctio id accusantium eos assumenda corporis. Suscipit aliquam nobis provident neque enim? Dicta doloribus corporis recusandae dolores esse',
    img: './game2048.png',
    link: 'https://olena-hapon.github.io/js_2048_game/',
  }
]

const Portfolio = () => {
  const scrollRef = useRef();
  const { scrollYProgress } = useScroll({ target: scrollRef, offset: ["start start", "end end",], });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);
console.log(x)
  return (
    <motion.div
      className={styles.motionWrapper}
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className={styles.wrapper} ref={scrollRef}>
        <div className={styles.mainTitle}>My works</div>
        <div className={styles.stickyContainer}>
          <motion.div className={styles.mot} style={{ x: x }}>
            <div className={styles.firstItem} />
            {items.map((item) => (
              <div 
                className={styles.itemContainer}
                key={item.id}>
                <div className={styles.item}>
                  <h1 className={styles.title}>{item.title}</h1>
                  <div className={styles.imgContainer} style={{position: 'relative'}}>
                    <Image src={item.img} alt='project' sizes='100%'
                    style={{ objectFit: 'contain' }}
                    fill />
                  </div>
                  <p className={styles.descriptions}>{item.desc}</p>
                  <Link href={item.link}>
                    <button className={styles.btn}>See demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className={styles.bottom}>
        <h1 className={styles.titleBottom}>Do you have a project</h1>
        <div className={styles.circle}>
        <motion.svg
          className={styles.svg}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
        >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className={styles.round}>
                Front-end Developer Front-end Developer
              </textPath>
            </text>
          </motion.svg>
          <Link href='/contact' className={styles.link}>Hire me</Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Portfolio
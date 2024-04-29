'use client'

import React, { useState } from 'react';
import styles from './navbar.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {motion} from 'framer-motion';

const links = [
  {url: '/', title: 'Home'},
  {url: '/about', title: 'About'},
  {url: '/portfolio', title: 'Portfolio'},
  {url: '/contact', title: 'Contact'},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const pathName = usePathname();

  const topVariants = {
    closed: {
      rotate:0,
    },
    opened: {
      rotate:45,
      backgroundColor: "rgb(255,255,255)",
    }
  }

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    }
  }

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor:"rgb(255,255,255)",
    }
  }

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      }
    },
  };

  const listItemVariants = {
    closed: {
      x:-10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className={styles.navbar}>
      <div>
       <Link href='/' className={styles.logo}>
          <span>Olena</span>
          <span className={styles.name}>Hapon</span>
       </Link>
      </div>

      {/* navLinks */}
      <div className={styles.navLinks}>
        {links.map(link => (
          <Link
            href={link.url}
            key={link.title}
            className={pathName === link.url &&styles.navLink}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className={styles.mobileMenu}>
        <button 
          className={styles.button}
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants}
            className={styles.btnLine}
            animate={open ? 'opened' : 'closed'}
          ></motion.div>
          <motion.div
            variants={centerVariants}
            className={styles.btnLine}
            animate={open ? 'opened' : 'closed'}
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            className={styles.btnLine}
            animate={open ? 'opened' : 'closed'}
          ></motion.div>
        </button>

        {/* Mobile list links */}
        {!!open && (
          <motion.div 
            className={styles.mobileList}
            variants={listVariants}
            initial='closed'
            animate='opened'
          >
            {links.map(link => (
              <motion.div
                key={link.title}
                variants={listItemVariants}
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <div className={styles.line}>
        <Link className={styles.github} href='https://github.com/olena-hapon?tab=repositories'>Follow on github</Link>
      </div>
    </div>
  )
}

export default Navbar
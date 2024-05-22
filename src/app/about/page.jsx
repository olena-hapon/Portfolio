'use client'
import React from 'react';
import styles from './about.module.css';
import { motion, useInView, useScroll } from 'framer-motion';
import Brain from '@/components/brain/Brain';
import { useRef } from 'react';

const About = () => {
  const containerRef = useRef();

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, {margin: '-100px'});

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, {margin: '-100px'});

  const {scrollYProgress} = useScroll({ container:containerRef});
 
  return (
    <motion.div
      className={styles.motionWrapper}
      initial={{ y: '-200vh'}}
      animate={{ y: '0%' }}
      transition={{ duration: 1}}
    >
      {/* CONTAINER MAIN */}
      <div
        className={styles.container}
        ref={containerRef}
      >
        <div className={styles.textContainer}>
          {/* CONTAINER TEXT */}
          <div className={styles.biography}>
            <h1 className={styles.title}>About me</h1>
            <p className={styles.text}>
              I'm Frontend Developer with strong knowledge in HTML, JavaScript, CSS, SCSS, library React, state manager Redux, Redux Toolkit. Created multiple responsive websites for mobile and desktop devices. Successfully integrated websites with APIs. Employed version control systems such as Git. Aiming to take on new challenges and utilize my coding and debugging skills for developing new features and improve the overall user experience.
           </p>
          </div>

          <div className={styles.skills} ref={skillRef}>
            <motion.h1
              initial={{ x:'-300px'}}
              animate={ isSkillRefInView ? {x:0} : {}}
              transition={{ delay: 0.2 }}
              className={styles.title}
            >
              Skills
            </motion.h1>
            <motion.div
              className={styles.skillsWrap}
              initial={{ x:'-300px'}}
              animate={ isSkillRefInView ? {x:0} : {}}
              transition={{ delay: 0.2 }}
            >
              <div className={styles.skill}>JavaScript</div>
              <div className={styles.skill}>HTML</div>
              <div className={styles.skill}>CSS</div>
              <div className={styles.skill}>SCSS</div>
              <div className={styles.skill}>React</div>
              <div className={styles.skill}>Next.JS</div>
              <div className={styles.skill}>Redux</div>
              <div className={styles.skill}>TypeScript</div>
              <div className={styles.skill}>Responsibility</div>
              <div className={styles.skill}>Redux Toolkit</div>
              <div className={styles.skill}>Figma</div>
              <div className={styles.skill}>API</div>
              <div className={styles.skill}>GIT</div>
            </motion.div>
          </div>

          <div className={styles.experience} ref={experienceRef}>
            <h1
              className={styles.title}
              initial={{ x:'-300px'}}
              animate={ isExperienceRefInView ? {x:0} : {}}
              transition={{ delay: 0.2 }}
            >
              My works
            </h1>
            <motion.div
              className={styles.list}
              initial={{ x:'-300px'}}
              animate={ isExperienceRefInView ? {x:0} : {}}
              transition={{ delay: 0.2 }}
            >

              {/* ListItem first */}
              <div className={styles.listItem}>
                {/* Left */}
                <div className={styles.item}>
                  <h3 className={styles.itemTitle}>React Desire store</h3>
                  <div className={styles.desc}> React, JavaScript, HTML, SCSS, Typescript, React Redux. </div>
                </div>
                  {/* Center */}
                <div className={styles.lineWrap}>
                  <div className={styles.line}>
                    <div className={styles.circle}></div>
                  </div>
                </div>
                  {/* Right */}
                <div className={styles.item}></div>
              </div>

               {/* ListItem two */}
              <div className={styles.listItem}>
                {/* Left */}
                <div className={styles.item}></div>
                  {/* Center */}
                <div className={styles.lineWrap}>
                  <div className={styles.line}>
                    <div className={styles.circle}></div>
                  </div>
                </div>
                  {/* Right */}
                <div className={styles.item}>
                  <h3 className={styles.itemTitle}>React Phone store</h3>
                  <div className={styles.desc}>React, JavaScript, HTML, SCSS, TypeScript, React Redux.</div>
                </div>
              </div>

              {/* ListItem three */}
              <div className={styles.listItem}>
                {/* Left */}
                <div className={styles.item}>
                  <h3 className={styles.itemTitle}>Dia</h3>
                  <div className={styles.desc}>HTML, JavaScript, SCSS. </div>
                </div>
                  {/* Center */}
                <div className={styles.lineWrap}>
                  <div className={styles.line}>
                    <div className={styles.circle}></div>
                  </div>
                </div>
                  {/* Right */}
                <div className={styles.item}></div>
              </div>

              {/* four item */}
              <div className={styles.listItem}>
                {/* Left */}
                <div className={styles.item}></div>
                  {/* Center */}
                <div className={styles.lineWrap}>
                  <div className={styles.line}>
                    <div className={styles.circle}></div>
                  </div>
                </div>
                  {/* Right */}
                <div className={styles.item}>
                  <h3 className={styles.itemTitle}>Miami</h3>
                  <div className={styles.desc}>HTML, JavaScript, SCSS.</div>
                </div>
              </div>
              
              {/* five item */}
              <div className={styles.listItem}>
                {/* Left */}
                <div className={styles.item}>
                  <h3 className={styles.itemTitle}>Game 2048</h3>
                  <div className={styles.desc}>HTML, JavaScript, SCSS.</div>
                </div>
                  {/* Center */}
                <div className={styles.lineWrap}>
                  <div className={styles.line}>
                    <div className={styles.circle}></div>
                  </div>
                </div>
                  {/* Right */}
                <div className={styles.item}></div>
              </div>
     
              {/* six item */}
              <div className={styles.listItem}>
                {/* Left */}
                <div className={styles.item}></div>
                  {/* Center */}
                <div className={styles.lineWrap}>
                  <div className={styles.line}>
                    <div className={styles.circle}></div>
                  </div>
                </div>
                  {/* Right */}
                <div className={styles.item}>
                  <h3 className={styles.itemTitle}>React todo app</h3>
                  <div className={styles.desc}>HTML, JavaScript, CSS, TypeScript</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
 
          {/* SVG CONTAINER */}
        <div className={styles.svgImg}>
          <Brain scrollProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  )
}

export default About
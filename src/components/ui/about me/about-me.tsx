import React from 'react';
import styles from './about-me.module.css';
import type { TAboutMeUIProps } from './type';

export const AboutMeUI: React.FC<TAboutMeUIProps> = ({
  title = 'ABOUT ME',
  description = 'I am a fullstack developer, a year of training and actively developing in React, TypeScript and Supabase. In my portfolio of 30+ projects on GitHub (half - pet projects).',
  ctaLink = 'https://github.com/kristinaJ7',
}) => {
  return (
    <section className={styles.aboutMe} id='about-me'>
      <div className={styles.container}>
        <h2 className={styles.title}>{title}</h2>

        <p className={styles.description}>{description}</p>

        <div className={styles.stats}>
          <div className={styles.statItem}>
            <span className={styles.statValue}>30+</span>
            <span className={styles.statLabel}>projects on GitHub</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statValue}>1.8 years</span>
            <span className={styles.statLabel}>full-stack training</span>
          </div>
        </div>
        <a
          href={ctaLink}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.buttonlink}
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

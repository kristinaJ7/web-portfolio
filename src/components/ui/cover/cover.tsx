import type { FC } from 'react';
import styles from './cover.module.css';

interface CoverUIProps {
  userName?: string;
}

export const CoverUI: FC<CoverUIProps> = ({ userName }) => {
  return (
    <div className={styles.coverSection}>
      {/* Яркие пятна ПОД стеклом (с анимацией) */}
      <div
        className={`${styles.brightSpot} ${styles.moving}`}
        style={{ left: '-150px', top: '100px' }}
      ></div>
      <div
        className={`${styles.brightSpot} ${styles.moving}`}
        style={{ right: '-150px', top: '200px' }}
      ></div>

      {/* Полупрозрачные пятна (с анимацией) */}
      <div
        className={`${styles.decorCircle} ${styles.moving}`}
        style={{ left: '-250px', top: '-50px' }}
      ></div>
      <div
        className={`${styles.decorCircle} ${styles.moving}`}
        style={{ left: 'calc(100% + 250px)', top: '-50px' }}
      ></div>

      <div className={styles.coverContent}>
        <div className={styles.glassPanel}>
          <h1 className={styles.coverTitle}>
            Welcome, <br /> To my Portfolio
          </h1>
          <div className={styles.subtitles}>
            <p className={styles.subtitle}>Full-stack developer</p>
            <p className={styles.subtitle}>
              {userName || 'Filimonova Kristina'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

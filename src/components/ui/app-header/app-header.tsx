import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './app-header.module.css';
import type { TAppHeaderUIProps } from './type';

export const AppHeaderUI: React.FC<TAppHeaderUIProps> = ({ userName }) => {
  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <div className={styles.menu_part_left}>
          {/* Главная — роутинг */}
          <NavLink
            to='/'
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.link_active : ''}`
            }
            end
          >
            <span className={styles.text}>home</span>
          </NavLink>

          <a href='#projects' className={styles.link}>
            <span className={styles.text}>my projects</span>
          </a>

          <a href='#about-me' className={styles.link}>
            <span className={styles.text}>about me</span>
          </a>

          <a href='#contact' className={styles.link}>
            <span className={styles.text}>contact</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

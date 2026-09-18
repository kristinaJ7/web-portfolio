import React from 'react';
import styles from './footer-contacts.module.css';
import type { TFooterContactsUIProps } from './type';

export const FooterContactsUI: React.FC<TFooterContactsUIProps> = ({
  additionalLinks,
}) => {
  return (
    <footer className={styles.footer} id='contact'>
      <div className={styles.container}>
        <h3 className={styles.title}>Сontacts</h3>

        <div className={styles.contactsGrid}>
          <a className={styles.contactItem}>
            <span>k.kristina.web@bk.ru</span>
          </a>
          <a
            href='https://github.com/kristinaJ7'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.githubBtn}
            aria-label='Профиль GitHub'
          >
            Profile GitHub
          </a>
        </div>

        {additionalLinks && additionalLinks.length > 0 && (
          <div className={styles.additionalLinks}>
            {additionalLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                className={styles.contactItem}
                aria-label={link.label}
              >
                <span className={styles.icon}>{link.emoji}</span>
                <span>{link.label}</span>
              </a>
            ))}
          </div>
        )}

        <p className={styles.title}>© 2026 Kristina.</p>
      </div>
    </footer>
  );
};

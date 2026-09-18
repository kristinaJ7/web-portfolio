import type { FC } from 'react';
import styles from './project-card.module.css';
import { useState } from 'react';
import { projectsData } from '../../../data/projectsData';
import type { ProjectsUIProps } from './project-card.types';

export const ProjectsUI: FC<ProjectsUIProps> = ({
  projects = projectsData,
}) => {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    src: string | null;
  }>({
    isOpen: false,
    src: null,
  });

  const openLightbox = (src: string) => setLightbox({ isOpen: true, src });
  const closeLightbox = () => setLightbox({ isOpen: false, src: null });

  return (
    <section
      className={`container ${styles['projects-section']}`}
      id='projects'
    >
      <h2 className={styles['section-title']}>My Projects on GitHub</h2>
      <div className={styles['projects-grid']}>
        {projects.map((project, index) => (
          <div key={project.id} className={styles['project-card']}>
            <div className={styles['card-image-wrapper']}>
              <div className={styles['image-gallery']}>
                {project.images.map((imgSrc, imgIndex) => (
                  <img
                    key={imgIndex}
                    src={imgSrc}
                    alt={`${project.title} preview ${imgIndex + 1}`}
                    className={styles['card-image']}
                    onClick={() => openLightbox(imgSrc)}
                  />
                ))}
              </div>
            </div>

            <div className={styles['card-content']}>
              <h3 className={styles['card-title']}>{project.title}</h3>
              <p className={styles['card-description']}>
                {project.description}
              </p>

              <div className={styles['card-actions']}>
                <a
                  href={project.githubLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`${styles['btn']} ${styles['btn-github']}`}
                >
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${styles['btn']} ${styles['btn-demo']}`}
                  >
                    Live Demo
                  </a>
                )}
              </div>

              <div className={styles['project-number-bottom-right']}>
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>

      {lightbox.isOpen && lightbox.src && (
        <div className={styles['lightbox-overlay']} onClick={closeLightbox}>
          <div
            className={styles['lightbox-content']}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type='button'
              className={styles['lightbox-close']}
              onClick={closeLightbox}
              aria-label='Close'
            >
              ✕
            </button>
            <img
              src={lightbox.src}
              alt='Full-size preview'
              className={styles['lightbox-image']}
            />
          </div>
        </div>
      )}
    </section>
  );
};

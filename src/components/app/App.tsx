import styles from './app.module.css';
import '@/index.css';
import { AppHeader } from '../app-header/app-header';
import { CoverUI } from '../ui/cover/cover';
import { AboutMeUI } from '../ui/about me/about-me';
import { FooterContactsUI } from '../ui/footer-contacts/footer-contacts';
import { ProjectsUI } from '../ui/project-card/project-card';

export function App() {
  return (
    <div className={styles.app}>
      <AppHeader />
      <main>
        <CoverUI />
        <AboutMeUI />
        <ProjectsUI />
      </main>
      <FooterContactsUI />
    </div>
  );
}

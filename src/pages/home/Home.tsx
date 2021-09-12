// Styles
import styles from './Home.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout';

export const Home = () => (
  <PageLayout>
    <div className={styles.container}>
      <img 
        src="images/home-heading.png"
        alt="Styled Components Using React"
      />
      <img
        src="images/azd.png"
        alt="By Ahmed Zaheer Dadarkar"
      />
    </div>
  </PageLayout>
);
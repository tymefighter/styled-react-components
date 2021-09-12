// Styles
import styles from './Home.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout';

// Config 
import { BASE_URL } from 'config';

export const Home = () => (
  <PageLayout>
    <div className={styles.container}>
      <img 
        src={BASE_URL + '/images/home-heading.png'}
        alt="Styled Components Using React"
      />
      <img
        src={BASE_URL + '/images/azd.png'}
        alt="By Ahmed Zaheer Dadarkar"
      />
    </div>
  </PageLayout>
);
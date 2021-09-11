// Styles
import styles from './RotatingCards.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout/PageLayout';
import { ContentCard } from './ContentCard';
import { StageCards } from './StageCards';

export const RotatingCards = () => (
  <PageLayout>
    <div className={styles.container}>
      <ContentCard />
      <StageCards />
    </div>
  </PageLayout>
)

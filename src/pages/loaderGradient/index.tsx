// Components
import { Loader } from 'modules/loader'
import { PageLayout } from 'modules/pageLayout';

// Styles
import styles from './LoaderGradient.module.scss';

export const LoaderGradient = () => (
  <PageLayout>
    <div className={styles.gridLayout}>
      <Loader className={styles.header} />
      <Loader className={styles.sidebar} />
      <Loader className={styles.main} />
      <Loader className={styles.aside} />
      <Loader className={styles.footer} />
    </div>
  </PageLayout>
)
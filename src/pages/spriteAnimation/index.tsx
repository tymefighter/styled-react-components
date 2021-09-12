// Components
import { PageLayout } from 'modules/pageLayout';
import { SpriteAnimator } from 'modules/spriteAnimator';

// Styles
import styles from './SpriteAnimationPage.module.scss';

export const SpriteAnimationPage = () => (
  <PageLayout>
    <div className={styles.container}>
      <SpriteAnimator
        width={60}
        height={60}
        imageWidth={480}
        imageHeight={240}
        src="/images/sprites.png"
        frameIndices={[
          { row: 2, column: 0 },
          { row: 2, column: 1 },
          { row: 2, column: 2 },
          { row: 2, column: 3 },
          { row: 2, column: 4 },
          { row: 2, column: 5 },
          { row: 2, column: 6 },
          { row: 2, column: 7 },
        ]}
        delay={100}
      />  
    </div>
  </PageLayout>
);
// Components
import { PageLayout } from 'modules/pageLayout';
import { SpriteAnimator } from 'modules/spriteAnimator';

// Styles
import styles from './SpriteAnimationPage.module.scss';

// Hooks
import { useKeyPressed } from './useKeyPressed';

// Constants
import { SPRITES_IMAGE_INFO, FRAME_INDICES, DELAY } from './constants';

export const SpriteAnimationPage = () => (
  <PageLayout>
    <div className={styles.container}>
      <SpriteAnimator
        {...SPRITES_IMAGE_INFO}
        frameIndices={FRAME_INDICES.RIGHT}
        delay={DELAY}
      />  
    </div>
  </PageLayout>
);
// Components
import { PageLayout } from 'modules/pageLayout';
import { SpriteAnimator } from 'modules/spriteAnimator';

// Styles
import styles from './SpriteAnimationPage.module.scss';

// Hooks
import { useKeyPressed } from './useKeyPressed';
import { useFrameIndices } from './useFrameIndices';

// Constants
import { SPRITES_IMAGE_INFO, DELAY } from './constants';

export const SpriteAnimationPage = () => {

  const keyPressed = useKeyPressed();
  const frameIndices = useFrameIndices(keyPressed);

  return (
    <PageLayout>
      <div className={styles.container}>
        <SpriteAnimator
          {...SPRITES_IMAGE_INFO}
          frameIndices={frameIndices}
          delay={DELAY}
        />  
      </div>
    </PageLayout>
  )
};
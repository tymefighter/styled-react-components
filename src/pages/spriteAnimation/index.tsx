// Components
import { PageLayout } from 'modules/pageLayout';
import { SpriteAnimator } from 'modules/spriteAnimator';

// Styles
import styles from './SpriteAnimationPage.module.scss';

// Hooks
import { useKeyPressed } from './useKeyPressed';
import { useFrameIndices } from './useFrameIndices';
import { useSpritePosition } from './useSpritePosition';

// Constants
import { SPRITES_IMAGE_INFO, DELAY } from './constants';

export const SpriteAnimationPage = () => {

  const keyPressed = useKeyPressed();
  const frameIndices = useFrameIndices(keyPressed);
  const position = useSpritePosition({
    initialPosition: { 
      top: 300,
      left: 300
    },
    direction: keyPressed
  });

  return (
    <PageLayout>
      <SpriteAnimator
        {...SPRITES_IMAGE_INFO}
        frameIndices={frameIndices}
        delay={DELAY}
        containerStyle={position}
        containerClassName={styles.spriteContainer}
      />  
    </PageLayout>
  )
};
// Styles
import styles from './StageCards.module.scss';

// Components
import { RotatingCard } from 'modules/rotatingCard';

interface StageCardProps {
  stageName: string;
  stageInfo: string;
};

const StageCard = ({ stageName, stageInfo }: StageCardProps) => (
  <RotatingCard 
    frontContent={(
      <h2 className={styles.stageName}>{stageName}</h2>
    )}
    backContent={(
      <p className={styles.stageInfo}>{stageInfo}</p>
    )}
    containerStyle={{ width: '20%' }}
  />
);

export const StageCards = () => (
  <div className={styles.container}>
    <StageCard 
      stageName="Beginner"
      stageInfo={
        "You begin your journey into the land which is the birthplace"
        + " of advanced tactics."
      }
    />
    <StageCard 
      stageName="Learner"
      stageInfo={
        "You learn and start to master the abilities and try to use"
        + " it to your advantage."
      }
    />
    <StageCard 
      stageName="Amateur"
      stageInfo={
        "Now that you have mastered many of the abilities, you"
        + " begin to use your abilities against the enemies of"
        + " the right path."
      }
    />
    <StageCard 
      stageName="Warrior"
      stageInfo={
        "Your energy is raging, your strength is visible and"
        + " you use all your learnt abilities for the good of all."
      }
    />
    <StageCard 
      stageName="Learning Warrior with Wisdom"
      stageInfo={
        "Gradually you dwell into the lands of powerful abilities"
        + " while maintaining your job of protecting the right path"
      }
    />
    <StageCard
      stageName="Wise Being"
      stageInfo={
        "After master powerful abilities and having travelled"
        + " and experienced most of what the land had to offer."
        + " You have gained wisdom and are desiring calmness."
      }
    />
  </div>
);
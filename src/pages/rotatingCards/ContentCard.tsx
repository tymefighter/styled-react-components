// Styles
import styles from './ContentCard.module.scss';

// Components
import { RotatingCard } from 'modules/rotatingCard';

export const ContentCard = () => (
  <RotatingCard
    frontContent={(
      <div className={styles.contentCard}>
        <h2>Learn and Practice Advanced Tactics</h2>
        <p>
          This course would teach you about advanced tactics
          and, how and when to use them. This will make 
          you immensely powerful !
        </p>
        <h3>The techniques taught in this course are:</h3>
        <ul>
          <li>Fire Array</li>
          <li>Focused Projectile</li>
          <li>Hyper Speed</li>
          <li>Spawn Golem</li>
          <li>Mind Control</li>
          <li>Teleportation</li>
          <li>Spawn Hurricane</li>
          <li>Dark Aura</li>
          <li>Meteor Shower</li>
          <li>Eternal Beam</li>
          <li>Multidimensional Teleportation</li>
          <li>Spawn Celestial Warrior</li>
        </ul>
      </div>
    )}
    backContent={(
      <div className={styles.contentCard}>
        <h2>Pricing</h2>
        <h3>130,000 Spiritual Points</h3>
        <p>
          All of these are prices together only
          at <span>130,000 Spiritual Points</span> !!
          This is an amazing deal just for you
        </p>
      </div>
    )}
    containerClassName={styles.contentCardContainer}
    containerStyle={{ width: '25%' }}
  />
);
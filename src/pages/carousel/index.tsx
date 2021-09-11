// Styles
import styles from './CarouselPage.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout';
import { Carousel } from 'modules/carousel';

export const CarouselPage = () => (
  <PageLayout>
    <Carousel
      arrowControls
      jumpControls
      autoRotate='RIGHT'
      containerClassName={styles.container}
      images={[
        {
          id: 'OLYMPUS_MONS',
          src: 'images/olympus-mons.jpeg',
          label: 'Olympus Mons'
        },
        {
          id: 'INFINITY',
          src: 'images/infinity.webp',
          label: 'Infinity'
        },
        {
          id: 'SUPER_STAR_DESTROYER',
          src: 'images/super-star-destroyer.png',
          label: 'Super Star Destroyer'
        },
        {
          id: 'SLAVE_1',
          src: 'images/slave.webp',
          label: 'Slave 1'
        }
      ]}
    />
  </PageLayout>
);
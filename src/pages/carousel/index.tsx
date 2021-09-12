// Styles
import styles from './CarouselPage.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout';
import { Carousel } from 'modules/carousel';

// Config
import { BASE_URL } from 'config';

export const CarouselPage = () => (
  <PageLayout>
    <Carousel
      arrowControls
      jumpControls
      autoRotate={{
        direction: 'RIGHT',
        delay: 2000
      }}
      containerClassName={styles.container}
      images={[
        {
          id: 'OLYMPUS_MONS',
          src: BASE_URL + '/images/olympus-mons.jpeg',
          label: 'Olympus Mons'
        },
        {
          id: 'INFINITY',
          src: BASE_URL + '/images/infinity.webp',
          label: 'Infinity'
        },
        {
          id: 'SUPER_STAR_DESTROYER',
          src: BASE_URL + '/images/super-star-destroyer.png',
          label: 'Super Star Destroyer'
        },
        {
          id: 'SLAVE_1',
          src: BASE_URL + '/images/slave.webp',
          label: 'Slave 1'
        }
      ]}
    />
  </PageLayout>
);
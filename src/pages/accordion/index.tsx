// Styles
import styles from './AccordionPage.module.scss';

// Components
import { PageLayout } from 'modules/pageLayout';
import { Accordion } from './Accordion';

export const AccordionPage = () => {

  const story = {
    id: 'STORY',
    label: 'Story',
    content: (
      <p className={styles.story}>
        This is the grand city of Astatine, where people
        live a great and purposeful life. You have come
        new in this city, and are being adjusted to the life
        which is offered here. Continue ahead to achieve
        greater reward and success.
      </p>
    )
  };

  const vehicles = {
    id: 'VEHICLES',
    label: 'Vehicles',
    content: (
      <div className={styles.vehicles}>
        <h2>Hyper Cars</h2>
        <ul>
          <li>Venom</li>
          <li>Rapid</li>
          <li>Estremo</li>
          <li>Origin</li>
          <li>Akuma</li>
          <li>Agni</li>
        </ul>
        <h2>Luxury Cars</h2>
        <ul>
          <li>Paladin</li>
          <li>Trident</li>
          <li>Grandeur</li>
        </ul>
      </div>
    )
  };

  const locations = {
    id: 'LOCATIONS',
    label: 'Locations',
    content: (
      <dl className={styles.locations}>
        <dt>The Island of Passion</dt>
        <dd>
          This Island is one of the few Islands which are bordering
          Astatine. You could reach this Island by taking a boat
          from the docks or by a helicopter.
        </dd>

        <dt>City Center</dt>
        <dd>
          The center of the city. It contains major attractions like 
          malls, leisure areas, theme parks, record breaking stuff
          and more.
        </dd>

        <dt>Town Palace</dt>
        <dd>
          The Town Palace was earlier the palace of the king
          of Astatine. Now, it serves as the palace of the people.
        </dd>

        <dt>Astatine Research and Advanced Technological Center</dt>
        <dd>
          The Technological, Environmental and Biotechnological
          institute and research center. Here, state of the art
          research is being performed.
        </dd>
      </dl>
    )
  };

  return (
    <PageLayout>
      <h1 className={styles.heading}>Accordion Example</h1>
      <Accordion
        items={[
          story,
          vehicles,
          locations
        ]}
      />
    </PageLayout>
  )
};
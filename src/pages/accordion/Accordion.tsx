// Library
import React from 'react';

// Styles
import styles from './Accordion.module.scss';

interface Item {
  id: string;
  label: string;
  content: React.ReactNode;
};

interface AccordionItemProps {
  id: string;
  label: string;
  content: React.ReactNode;
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

export const AccordionItem = ({ 
  id, label, content,
  isOpen, open, close
}: AccordionItemProps) => (
  <div id={id} className={styles.accordionItem}>
    <button onClick={React.useCallback(() => {
      isOpen ? close() : open();
    }, [isOpen, open, close])}>
      {label}
    </button>
    {isOpen && content}
  </div>
);

interface AccordionProps {
  items: Item[]
};

export const Accordion = ({ items }: AccordionProps) => {
  const [itemId, setItemId] = React.useState<string | undefined>();

  return (
    <div className={styles.accordion}>
      {items.map(item => (
        <AccordionItem 
          key={item.id}
          isOpen={itemId === item.id}
          open={() => setItemId(item.id)}
          close={() => setItemId(undefined)}
          {...item}
        />
      ))}
    </div>
  )
};
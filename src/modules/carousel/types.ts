export type Theme = 'DARK' | 'LIGHT';
export type AutoRotate = 'LEFT' | 'RIGHT' | 'NONE';

export interface Image {
  id: string;
  label: string;
  src: string;
};

export interface Transition {
  nextId: string;
  direction: 'LEFT' | 'RIGHT';
};

export type Theme = 'DARK' | 'LIGHT';
export interface AutoRotate {
  direction: 'LEFT' | 'RIGHT';
  delay: number;
};

export interface Image {
  id: string;
  label: string;
  src: string;
};

export interface Transition {
  nextId: string;
  direction: 'LEFT' | 'RIGHT';
};

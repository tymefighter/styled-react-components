// Components
import { Home } from 'pages/home';
import { LoaderGradient } from 'pages/loaderGradient';
import { RotatingCards } from 'pages/rotatingCards';
import { PlaceholderStyling } from 'pages/placeholderStyling';
import { CarouselPage } from 'pages/carousel';
import { AccordionPage } from 'pages/accordion';
import { SpriteAnimationPage } from 'pages/spriteAnimation';

export const PAGE_NAMES = {
  LOADER_GRADIENT: 'LOADER GRADIENT',
  ROTATING_CARDS: 'ROTATING CARDS',
  PLACEHOLDER_STYLING: 'PLACEHOLDER STYLING',
  CAROUSEL: 'CAROUSEL',
  ACCORDION: 'ACCORDION',
  SPRITE_ANIMATION: 'SPRITE ANIMATION',
  HOME: 'HOME'
} as const;

export const PAGE_NAME_LIST = Object.values(PAGE_NAMES);

export const PAGE_VS_ROUTE = {
  [PAGE_NAMES.LOADER_GRADIENT]: '/loader-gradient',
  [PAGE_NAMES.ROTATING_CARDS]: '/rotating-cards',
  [PAGE_NAMES.PLACEHOLDER_STYLING]: '/placeholder-styling',
  [PAGE_NAMES.CAROUSEL]: '/carousel',
  [PAGE_NAMES.ACCORDION]: '/accordion',
  [PAGE_NAMES.SPRITE_ANIMATION]: '/sprite-animation',
  [PAGE_NAMES.HOME]: '/home'
} as const;

export const PAGE_VS_COMPONENT = {
  [PAGE_NAMES.LOADER_GRADIENT]: LoaderGradient,
  [PAGE_NAMES.ROTATING_CARDS]: RotatingCards,
  [PAGE_NAMES.PLACEHOLDER_STYLING]: PlaceholderStyling,
  [PAGE_NAMES.CAROUSEL]: CarouselPage,
  [PAGE_NAMES.ACCORDION]: AccordionPage,
  [PAGE_NAMES.SPRITE_ANIMATION]: SpriteAnimationPage,
  [PAGE_NAMES.HOME]: Home
} as const;

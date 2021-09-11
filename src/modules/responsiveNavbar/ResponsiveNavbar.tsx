// Components
import { NormalNavbar } from './NormalNavbar';
import { ButtonNavbar } from './ButtonNavbar';

// Hooks
import { useClientSize } from 'modules/hooks/useClientSize';

// Types
import { NavItem } from './types';

interface ResponsiveNavbarProps {
  homeNavItem ?: NavItem;
  navItems: NavItem[];
  minWidth?: number;
};

export const ResponsiveNavbar = (
  { homeNavItem, navItems, minWidth }: ResponsiveNavbarProps
) => {

  const { width } = useClientSize();

  const numNavItems = (homeNavItem ? 1 : 0) + navItems.length;
  const isSpaceAdequate = !minWidth || (numNavItems * minWidth <= width);
  
  return isSpaceAdequate ? (
    <NormalNavbar navItems={[...(homeNavItem ? [homeNavItem] : []), ...navItems]} />
  ) : (
    <ButtonNavbar homeNavItem={homeNavItem} navItems={navItems} />
  );
};

// Styles
import styles from './Responsive.module.scss';

// Components
import { Link } from 'react-router-dom';
import { Popover, PopoverLocation } from 'modules/popover';

// Types
import { NavItem } from './types';

interface NavbarMoreButtonProps {
  navItems: NavItem[];
};

const NavbarMoreButton = ({ navItems }: NavbarMoreButtonProps) => (
  <Popover
    popoverLocation={PopoverLocation.BOTTOM_LEFT}
    content={() => (
      <div className={styles.navbarContent}>
        {navItems.map(({ label, route }) => (
          <Link key={label} to={route}>{label}</Link>
        ))}
      </div>
    )}
  >
  {({ openPopover, closePopover, isPopoverOpen }) => (
    <button 
      className={styles.navbarMoreButton} 
      onClick={() => {isPopoverOpen ? closePopover() : openPopover()}}
    >
      &#9776;
    </button>
  )}
  </Popover>
);

interface ButtonNavbarProps {
  homeNavItem ?: NavItem;
  navItems: NavItem[];
};

export const ButtonNavbar = ({ homeNavItem, navItems }: ButtonNavbarProps) => (
  <nav className={styles.nav}>
    {homeNavItem && (
      <Link to={homeNavItem.route} className={styles.homeNavItem}>
        {homeNavItem.label}
      </Link>
    )}
    <NavbarMoreButton navItems={navItems} />
  </nav>
);
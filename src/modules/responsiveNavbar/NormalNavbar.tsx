// Styles
import styles from './Responsive.module.scss';

// Components
import { Link } from 'react-router-dom';

// Types
import { NavItem } from './types';

interface NormalNavbarProps {
  navItems: NavItem[];
};

export const NormalNavbar = ({ navItems }: NormalNavbarProps) => (
  <nav className={styles.nav}>
    {navItems.map(({ label, route }) => (
      <Link className={styles.navItem} key={label} to={route}>{label}</Link>
    ))}
  </nav>
);
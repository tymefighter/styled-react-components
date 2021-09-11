// Library
import React from 'react';

// Components
import { ResponsiveNavbar } from 'modules/responsiveNavbar';

// Constants
import { PAGE_NAMES, PAGE_NAME_LIST, PAGE_VS_ROUTE } from 'page_info';

export const Navbar = () => {
  const homeNavItem = {
    label: PAGE_NAMES.HOME,
    route: PAGE_VS_ROUTE[PAGE_NAMES.HOME]
  };

  const navItems = React.useMemo(() => 
    PAGE_NAME_LIST
      .filter(pageName => pageName !== PAGE_NAMES.HOME)
      .map(pageName => ({ label: pageName, route: PAGE_VS_ROUTE[pageName] }))
  , []);

  return (
    <ResponsiveNavbar minWidth={200} homeNavItem={homeNavItem} navItems={navItems} />
  );
}
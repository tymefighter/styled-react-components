// Library
import React from 'react';

// Components
import { Navbar } from './Navbar';

interface PageLayoutProps {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => (
  <>
    <Navbar />
    {children}
  </>
);
import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import MenuDrawer from './components/Header/Menudrawer';

function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <MenuDrawer isOpen={isMenuOpen} onClose={handleCloseMenu} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

import React from 'react';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import FormProfil from 'src/containers/FormProfil';
import MenuModal from 'src/containers/MenuModal';

import './styles.scss';

export default function Profil({ width, breakpoint, menuIsOpen }) {
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <MenuModal />
      { !menuIsOpen && <FormProfil /> }

      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

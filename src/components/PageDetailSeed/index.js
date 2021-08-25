import React from 'react';
import './styles.scss';

// == Composant
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import ComponentSeed from 'src/containers/ComponentSeed';
import MenuModal from 'src/containers/MenuModal';

const PageDetailSeed = ({ width, breakpoint, menuIsOpen }) => (
  <div className="page-detail-seed">
    <Header width={width} breakpoint={breakpoint} />

    <MenuModal />
    { !menuIsOpen && <ComponentSeed />}
    <Footer width={width} breakpoint={breakpoint} />
  </div>
);

export default PageDetailSeed;

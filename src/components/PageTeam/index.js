import React from 'react';

import PropTypes from 'prop-types';

// Components
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MenuModal from 'src/containers/MenuModal';
import TeamCards from './TeamCards';

import './styles.scss';

// width, breakpoint : for menu in desktop and mobile
// isOpen : for modal menu

export default function PageTeam({ width, breakpoint, menuIsOpen }) {
  return (
    <div className="sign-in">
      <Header width={width} breakpoint={breakpoint} />
      <MenuModal />
      { !menuIsOpen && <TeamCards /> }
      <Footer width={width} breakpoint={breakpoint} />
    </div>
  );
}

PageTeam.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
};

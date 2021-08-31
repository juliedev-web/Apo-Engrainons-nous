import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MenuModal from 'src/containers/MenuModal';
import DirectChatPage from 'src/containers/DirectChatPage';

const Tchat = ({
  width, breakpoint, menuIsOpen, emptyNewMessageCounter,
}) => {
  useEffect(() => () => {
    emptyNewMessageCounter();
  });
  return (
    <div className="Tchat">
      <Header
        width={width}
        breakpoint={breakpoint}
      />

      <MenuModal />

      {
      !menuIsOpen && (
      <DirectChatPage from="chatPage" />
      )
    }

      <Footer
        width={width}
        breakpoint={breakpoint}
      />
    </div>
  );
};

Tchat.propTypes = {
  width: PropTypes.number.isRequired,
  breakpoint: PropTypes.number.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  emptyNewMessageCounter: PropTypes.number.isRequired,
};

export default Tchat;

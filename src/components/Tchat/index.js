import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import MenuModal from 'src/containers/MenuModal';
import DirectChatPage from 'src/containers/DirectChatPage';

const Tchat = ({ width, breakpoint, menuIsOpen }) => (
  <div>
    <Header
      width={width}
      breakpoint={breakpoint}
    />

    <MenuModal />

    {
      !menuIsOpen && (
        <>
          <DirectChatPage />
        </>
      )
    }

    <Footer
      width={width}
      breakpoint={breakpoint}
    />
  </div>
);

export default Tchat;

import React from 'react';
import Header from 'src/components/Header';
import MenuModal from 'src/components/MenuModal';
import Footer from 'src/components/Footer';
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

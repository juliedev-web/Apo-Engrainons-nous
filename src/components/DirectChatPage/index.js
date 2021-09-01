import React from 'react';

import PropTypes from 'prop-types';

import './styles.scss';

import { ChatEngine } from 'react-chat-engine';

/**
 *
 * fake tchat to get new message to pop-up a counter on
 * message icon
 *
 */
const DirectChatPage = ({ userName, receivedNewMessage, from }) => (
  <div className="chat-window">
    <ChatEngine
      height="80vh"
      projectID="0405202d-3de4-4853-b0d8-84e437aa7cfd"
      userName={userName}
      userSecret={userName}
      renderIceBreaker={() => {}}
      renderNewChatForm={() => {}}
      renderChatHeader={() => {}}
      onNewMessage={() => receivedNewMessage(from)}
    />
  </div>
);

DirectChatPage.propTypes = {
  userName: PropTypes.string.isRequired,
  receivedNewMessage: PropTypes.func.isRequired,
  from: PropTypes.string.isRequired,
};

export default DirectChatPage;

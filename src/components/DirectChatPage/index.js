import React, { useState } from 'react';

import './styles.scss';

import { ChatEngine } from 'react-chat-engine';

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

export default DirectChatPage;

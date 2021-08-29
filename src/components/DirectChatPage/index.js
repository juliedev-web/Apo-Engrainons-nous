import React, { useState } from 'react';

import { ChatEngine, getOrCreateChat } from 'react-chat-engine';

const DirectChatPage = ({ userName }) => {
  const [username, setUsername] = useState('');

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername(''),
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="button" onClick={() => createDirectChat(creds)}>
          Create
        </button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      projectID="0405202d-3de4-4853-b0d8-84e437aa7cfd"
      userName={userName}
      userSecret={userName}
      renderIceBreaker={() => {}}
      renderChatSettings={() => {}}
      renderNewChatForm={() => {}}
      renderChatHeader={() => {}}
    />
  );
};

export default DirectChatPage;

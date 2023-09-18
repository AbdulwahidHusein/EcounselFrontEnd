import React, { useState, useEffect, useRef } from 'react';
import { Button, Input } from 'reactstrap';
import './chat.css'


const SenderProfile = () => {
  return (
    <div className="sender-profile">
      <img src="profile-picture.jpg" alt="" className="profile-picture" />
      <div className="profile-info">
        <p>John Doe &nbsp; online</p>
      </div>
    </div>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef(null);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const newMessage = {
        content: inputValue,
        timestamp: new Date().toLocaleTimeString(),
        isSent: true,
      };
      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container">
      <SenderProfile />
      <div className="message-container" ref={chatContainerRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${message.isSent ? 'sent' : 'received'}`}
          >
            <div className="message-content">{message.content}</div>
            <div className="message-timestamp">{message.timestamp}</div>
          </div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit} className="input-container">
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
        />
        <Button color="primary" type="submit">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Chat;
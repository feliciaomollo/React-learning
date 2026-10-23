import { useRef, useEffect } from 'react';
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css'

function ChatMessages({chatMessages}) { //usually on top of a component and not inside any if stsateent or function
        const chatMessagesRef = useRef(null);
       
        useEffect(()=>{
          const containerElem = chatMessagesRef.current;
          if (containerElem){
            containerElem.scrollTop = containerElem.scrollHeight;
          }
        }, [chatMessages]); //runs everytime our data changes such as chatmessages and its called dependancy array
        
        return (
          <div className="chat-messages-container" ref = {chatMessagesRef}>
              {chatMessages.map((chatMessage) => {
                return (
                  <ChatMessage
                    message={chatMessage.message}
                    sender={chatMessage.sender}
                    key={chatMessage.id}
                  />
                );
              })}
          </div>
        );
      }
export default ChatMessages;
import { useState } from 'react';
import { ChatInput } from './components/ChatInput.jsx';
import ChatMessages from './components/ChatMessages'
import './App.css'  

function App() {
        const [chatMessages, setChatMessages] = useState( 
            [
                {
                    message: "hello Chatbot",
                    sender: "user",
                    id: "id1"
                },
                {
                    message: "hello how can i help?",
                    sender: "robot",
                    id: "id2"
                },
                {
                    message: "Can you get me today's date?",
                    sender: "user",
                    id: "id3"
                },
                {
                    message: "Today is September 27th.",
                    sender: "robot",
                    id: "id4"
                }
            ]
        );
        return (
          <div className="app-container"> 
            <ChatMessages 
              chatMessages={chatMessages} 
            />

            <ChatInput 
                chatMessages={chatMessages} 
                setChatMessages ={setChatMessages}
            />
          </div>
        );
      }
export default App

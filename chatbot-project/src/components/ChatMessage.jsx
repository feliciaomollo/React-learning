import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './ChatMessage.css'


//ternary operator is used as an if-else statatement in the jsx. if sender = user then name it chat message user else name it chat message robot
    export function ChatMessage({ message, sender }) {

        return (
          <div className={sender ==='user'? 'chat-message-user': 'chat-message-robot'}> 

            {sender === 'robot' && (
              <img src={RobotProfileImage} className="chat-message-profile"/>
            )}
            <div className= "chat-message-text">
              {message}
            </div>

            {sender === 'user' && (
              <img src={UserProfileImage} className="chat-message-profile"/>
            )}

          </div>
        );
      }
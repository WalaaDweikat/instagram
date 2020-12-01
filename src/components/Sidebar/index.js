import "./Sidebar.css";
import instaLogo from "./instaLogo.png";
import home from "./home.png";
import live from "./live.png";
import logout from "./logout.png";
import message from "./message.png";
import notification from "./notification.png";
import settings from "./settings.png";

export default function Sidebar() {
  return (
    <div className="containerside">
      <img src={instaLogo} alt="instaLogo" className="instaLogo"></img>

      <div className="items">
        <img src={home} alt="Home"></img>
        <span>Home</span>
      </div>

      <div className="items">
        <img src={live} alt="Live"></img>
        <span>Live</span>
      </div>

      <div className="items">
        <img src={message} alt="Message"></img>
        <span>Message</span>
      </div>

      <div className="items">
        <img src={notification} alt="Notification"></img>
        <span>Notification</span>
      </div>

      <div className="items">
        <img src={settings} alt="Settings"></img>
        <span>Settings</span>
      </div>

      <div className="items">
        <img src={logout} alt="Logout"></img>
        <span>Logout</span>
      </div>
    </div>
  );
}

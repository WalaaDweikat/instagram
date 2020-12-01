import "./photobottom.css";
import like from "./like.png";
import message from "./message.png";
import send from "./send.png";
import bookmark from "./bookmark.png";

export default function PhotoTop(props) {
  return (
    <div className="photobottomContainer">
      <div>
        <img src={like} alt="" className="ml"></img>
        <img src={message} alt="" className="ml"></img>
        <img src={send} alt=""></img>
      </div>
      <img src={bookmark} alt=""></img>
    </div>
  );
}

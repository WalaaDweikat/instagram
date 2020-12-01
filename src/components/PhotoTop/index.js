import "./phototop.css";
import more from "./more.png";
export default function PhotoTop(props) {
  return (
    <div className="phototopContainer">
      <div class="personImg">
        <img src={props.photo} alt=""></img>
      </div>

      <span>{props.name}</span>
      <p>{props.city}</p>
      <div>
        <img src={more} alt=""></img>
      </div>
    </div>
  );
}

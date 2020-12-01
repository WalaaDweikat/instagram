import "./Search.css";
import camera from "./camera.png";
import person from "./person.png";
import search from "./search.png";
import hum from "./hum.png";

export default function Search(props) {
  return (
    <div className="container">
      <div className="menu">
        <img src={hum} alt="menu" onClick={props.onClick}></img>
      </div>
      <div className="camera">
        <img src={camera} alt="camera"></img>
      </div>
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <div className="image">
          <img src={search} alt="search"></img>
        </div>
      </div>
      <div className="emma">
        <div>
          <img src={person} alt="i"></img>
        </div>
        <p>
          <span>
            <b>Emma Watson</b>
          </span>
          <br></br> Actress,Model <br></br>Paris,France
        </p>
      </div>
    </div>
  );
}

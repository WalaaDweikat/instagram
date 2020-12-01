import addStory from "./addStory.png";
import "./newstory.css";
export default function NewStory() {
  return (
    <div className="addStory">
      <div>
        <img src={addStory} alt="new story"></img>
      </div>
      Add Story
    </div>
  );
}

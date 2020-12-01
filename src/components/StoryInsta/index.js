import "./story.css";
import android from "./android.jpg";
import person1 from "./person1.jpg";

export default function StoryInsta() {
  return (
    <div className="storyContainer">
      <div>
        <img src={person1} alt="person" className="img2"></img>
        <img src={android} alt="person" className="img1"></img>
      </div>
      <p>
        <span>#Technology</span>#Android
      </p>
    </div>
  );
}

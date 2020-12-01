import "./App.css";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import NewStory from "./components/NewStory";
import StoryInsta from "./components/StoryInsta";
import PhotoTop from "./components/PhotoTop";
import PhotoBottom from "./components/PhotoBottom";
import person3 from "./components/PhotoTop/person3.jpg";
import person4 from "./components/PhotoTop/person4.jpg";
import person5 from "./components/PhotoTop/person5.jpg";
import person6 from "./components/PhotoTop/person6.jpg";
import person7 from "./components/PhotoTop/person7.jpg";
import img1 from "./img1.PNG";
import img2 from "./img2.PNG";
import img3 from "./img3.PNG";
import img4 from "./img4.PNG";
import img5 from "./img5.PNG";
import img6 from "./img6.PNG";

import { useState, useEffect } from "react";
function App() {
  const [barSideOpen, setSidebarOpen] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);
  const openHandler = () => {
    if (!barSideOpen) {
      setSidebarOpen(true);
    } else {
      setSidebarOpen(false);
    }
  };

  const handleResize = () => {
    let a = window.innerWidth;
    setWidth(a);
  };

  window.addEventListener("resize", handleResize);
  useEffect(() => {
    if (width >= 1100) {
      setSidebarOpen(true);
    } else setSidebarOpen(false);
  }, [width]);

  let sidebar;
  if (barSideOpen) sidebar = <Sidebar />;
  else sidebar = null;
  return (
    <div className="app">
      <div className="sidebar">{sidebar}</div>
      <div className="s">
        <Search onClick={openHandler}></Search>
        <div className="stories">
          <NewStory></NewStory>
          <StoryInsta></StoryInsta>
          <StoryInsta></StoryInsta>
          <StoryInsta></StoryInsta>
          <StoryInsta></StoryInsta>
        </div>
        <div className="ap">
          <div className="a1">
            <PhotoTop
              photo={person3}
              name="Emma Watson"
              city="France,Paris"
            ></PhotoTop>
            <img src={img1} alt="" className="ww"></img>
            <PhotoBottom></PhotoBottom>
          </div>

          <div className="a1">
            <PhotoTop
              photo={person4}
              name="Emma Watson"
              city="France,Paris"
            ></PhotoTop>
            <img src={img2} alt="" className="ww"></img>
            <PhotoBottom></PhotoBottom>
          </div>

          <div className="a1">
            <PhotoTop
              photo={person5}
              name="Emma Watson"
              city="France,Paris"
            ></PhotoTop>
            <img src={img3} alt="" className="ww"></img>
            <PhotoBottom></PhotoBottom>
          </div>

          <div className="a1">
            <PhotoTop
              photo={person6}
              name="Emma Watson"
              city="France,Paris"
            ></PhotoTop>
            <img src={img4} alt="" className="ww"></img>
            <PhotoBottom></PhotoBottom>
          </div>

          <div className="a1">
            <PhotoTop
              photo={person7}
              name="Emma Watson"
              city="France,Paris"
            ></PhotoTop>
            <img src={img5} alt="" className="ww"></img>
            <PhotoBottom></PhotoBottom>
          </div>

          <div className="a1">
            <PhotoTop
              photo={person3}
              name="Emma Watson"
              city="France,Paris"
            ></PhotoTop>
            <img src={img6} alt="" className="ww"></img>
            <PhotoBottom></PhotoBottom>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

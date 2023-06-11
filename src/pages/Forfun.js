import "../styles/Forfun.css";
import React from "react";

import img1 from "../images/1.JPG";
import img2 from "../images/2.JPG";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import img5 from "../images/5.jpg";
import img6 from "../images/6.jpg";
import img7 from "../images/7.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.jpg";

import img1f from "../images/1f.jpg";
import img2f from "../images/2f.jpg";
import img3f from "../images/3f.jpg";
import img4f from "../images/4f.jpg";
import img5f from "../images/5f.jpg";
import img6f from "../images/6f.jpg";
import img7f from "../images/7f.jpg";
import img8f from "../images/8f.jpg";
import img9f from "../images/9f.jpg";
import img10f from "../images/10f.jpg";
import img11f from "../images/11f.jpg";
import img12f from "../images/12f.jpg";

function Forfun() {
  return (
    <div className="projectsContainer">
      <h1 className="largeFont notionFont">Photography</h1>
      <div className="flex-container">
        <div className="column decWidth">
          <img className="photoSetting" src={img1} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img2} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img3} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img4} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img5} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img6} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img7} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img8} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img9} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img10} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img11} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img12} alt="photoimg" />
        </div>
      </div>

      <h1 className="largeFont notionFont topPadding">Cooking / Baking</h1>
      <div className="flex-container">
        <div className="column decWidth">
          <img className="photoSetting" src={img1f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img2f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img3f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img4f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img5f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img6f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img7f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img8f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img9f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img10f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img11f} alt="photoimg" />
        </div>
        <div className="column decWidth">
          <img className="photoSetting" src={img12f} alt="photoimg" />
        </div>

        {/*       Template for a 3x# for gallary showcase
        <div className="column decWidth"></div>
        <div className="column decWidth"></div>
        <div className="column decWidth"></div>
        <div className="column decWidth"></div> */}
      </div>
    </div>
  );
}

export default Forfun;

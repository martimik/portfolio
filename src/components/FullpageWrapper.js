import React, { useState } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import ProjectList from "./ProjectList";
import arrow from "../images/arrow.png";

export default function FullpageWrapper() {
  const [btnVisible, setBtnVisible] = useState(false);

  const ReturnBtn = (props) => {
    return (
      <img
        className={btnVisible ? "navigationVisible" : "navigationHidden"}
        src={arrow}
        alt="back"
        onClick={() => props.fullpageApi.moveTo(1, 0)}
      />
    );
  };

  return (
    <ReactFullpage
      //fullpage options
      scrollingSpeed={500}
      navigation
      scrollOverflow={true}
      verticalCentered
      onLeave={() => {
        setBtnVisible(false);
      }}
      afterLoad={() => {
        setBtnVisible(true);
      }}
      render={({ fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Landing fullpageApi={fullpageApi} />
            </div>
            <div className="section">
              <div>
                <ReturnBtn fullpageApi={fullpageApi} />
                <About />
              </div>
            </div>
            <div className="section">
              <div>
                <ReturnBtn fullpageApi={fullpageApi} />
                <ProjectList />
              </div>
            </div>
            <div className="section">
              <div>
                <ReturnBtn fullpageApi={fullpageApi} />
                <Skills />
              </div>
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

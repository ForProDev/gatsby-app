import * as React from "react";
// import * as ScrollMagic from "scrollmagic";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
// styles
const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  color: "#fff",
  fontSize: "5rem",
  fontWeight: 800,
};

const circleBox = {
  height: "150px",
  width: "150px",
  backgroundColor: "#fff",
  borderRadius: "50%",
};

const first = {
  backgroundColor: "#546599",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const second = {
  backgroundColor: "#ee2244",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
};
const third = {
  backgroundColor: "#449911",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

gsap.registerPlugin(ScrollTrigger);

// markup
const IndexPage = () => {
  const element = React.useRef(null);
  const circle = React.useRef(null);
  React.useEffect(() => {
    gsap.to(circle.current, {
      scrollTrigger: {
        trigger: element.current,
        toggleActions: "restart none reverse none",
        markers: true,
        start: "top",
        pin: true,
        scrub: true,
      },
      duration: 2,
      scale: 3,
      x: -200,
      delay: 2,
    });
  }, []);
  return (
    <main style={pageStyles}>
      <title>Home Page</title>
      <div className="first" style={first}>
        Hello
      </div>
      <div className="second" style={second} ref={element}>
        <div ref={circle} style={circleBox}></div>
      </div>
      <div className="third" style={third}>
        How are you
      </div>
    </main>
  );
};

export default IndexPage;

import React, { useEffect, useRef } from "react";
import { textAnimation } from "../helpers/filterContacts";

const HomeView = () => {
  let text = useRef(null);
  useEffect(() => {
    textAnimation(text);
  }, []);
  return (
    <>
      <h1 style={{ visibility: "hidden" }}>Home-Page</h1>
      <h1>Home-Page</h1>
      <div
        ref={(el) => (text = el)}
        className="text"
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <p>
          You can fool all of the people some of the time, and some of the
          people all of the time, but you can't fool all of the people all of
          the time.
          <br />
        </p>
      </div>
    </>
  );
};

export default HomeView;

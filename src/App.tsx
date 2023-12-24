import "./App.css";
import moment from "moment";
import { Yes } from "./Yes";
import { No } from "./No";
import { useState } from "react";
import { NicsFace } from "./NicsFace";
import { getWindowDimensions } from "./utils";

function App() {
  const initDimensions = getWindowDimensions();
  const [mouseCoordinates, setMouseCoordinates] = useState([
    initDimensions.height / 2,
    initDimensions.width / 2,
  ]);
  const nicsBirthday = moment("12-27", "MM-DD");
  const today = moment();

  const isItNicsBirthday = today.dayOfYear() === nicsBirthday.dayOfYear();

  const onMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    setMouseCoordinates([e.pageY, e.pageX]);
  };

  return (
    <>
      <div onMouseMove={onMouseMove} style={{ height: "95%", width: "95%" }}>
        {isItNicsBirthday ? <Yes /> : <No />}
      </div>
      <NicsFace mouseCoordinates={mouseCoordinates} />
    </>
  );
}

export default App;

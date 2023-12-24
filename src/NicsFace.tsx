import { useCallback, useEffect, useState } from "react";
import { getWindowDimensions } from "./utils";

interface Props {
  mouseCoordinates: number[];
}

export const NicsFace = ({ mouseCoordinates }: Props) => {
  const [screenWidth, setScreenWidth] = useState(getWindowDimensions().width);

  const handleResize = useCallback(() => {
    setScreenWidth(getWindowDimensions().width);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <img
      className="nics-face"
      src="nics-face.png"
      style={{
        position: "absolute",
        top: mouseCoordinates[0] - 40,
        left: mouseCoordinates[1] - 40,
        zIndex: -1,
        height: screenWidth / 6.3,
      }}
    />
  );
};

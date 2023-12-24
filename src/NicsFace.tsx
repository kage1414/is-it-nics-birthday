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

  const height = screenWidth / 6.3 > 120 ? 120 : screenWidth / 6.3;

  const rotationSpeed = ((screenWidth - mouseCoordinates[0]) / 230) * 0.5;

  return (
    <span
      className="nics-face"
      style={{
        position: "absolute",
        top: mouseCoordinates[0] - height / 2,
        left: mouseCoordinates[1] - height / 2,
        zIndex: -1,
        height,
      }}
    >
      <img
        style={{
          MozAnimation: `rotatay ${rotationSpeed}s linear infinite`,
          WebkitAnimation: `rotatay ${rotationSpeed}s linear infinite`,
          OAnimation: `rotatay ${rotationSpeed}s linear infinite`,
          animation: `rotatay ${rotationSpeed}s linear infinite`,
        }}
        src="nics-face.png"
      />
    </span>
  );
};

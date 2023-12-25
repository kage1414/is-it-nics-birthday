import { useCallback, useState } from "react";

interface Props {
  mouseCoordinates: number[];
  clicked: boolean;
}

export const NicsFace = ({ mouseCoordinates, clicked }: Props) => {
  const [speedAlteration, setSpeedAlteration] = useState(0);

  window.document.body.onkeydown = (e) => {
    if (e.key === "ArrowUp") {
      const newSpeed = Number((speedAlteration - 0.05).toFixed(2));
      setSpeedAlteration(newSpeed);
    } else if (e.key === "ArrowDown") {
      const newSpeed = Number((speedAlteration + 0.05).toFixed(2));
      setSpeedAlteration(newSpeed);
    }
  };

  const getImageStyles = useCallback(
    ({
      time,
      orbit,
    }: {
      time: number;
      orbit: "medOrbit" | "narrowOrbit" | "wideOrbit";
    }) => ({
      MozAnimation: `${orbit} ${time}s linear infinite`,
      WebkitAnimation: `${orbit} ${time}s linear infinite`,
      OAnimation: `${orbit} ${time}s linear infinite`,
      animation: `${orbit} ${time}s linear infinite`,
      borderRadius: "5px",
      height: "48px",
    }),
    []
  );

  return (
    <span
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        transform: `translate(${mouseCoordinates[1] - 40}px, ${
          mouseCoordinates[0] - 40
        }px)`,
        transition: "600ms",
        zIndex: -1,
      }}
    >
      <img
        style={getImageStyles({
          orbit: "medOrbit",
          time: 1.5 + speedAlteration,
        })}
        ref={(ref) => {
          if (ref) {
            ref.style.animationPlayState = clicked ? "running" : "paused";
          }
        }}
        src="/nics-face.png"
      />
      <img
        style={getImageStyles({
          orbit: "narrowOrbit",
          time: 0.9 + speedAlteration,
        })}
        ref={(ref) => {
          if (ref) {
            ref.style.animationPlayState = clicked ? "running" : "paused";
          }
        }}
        src="/nic-smirking.png"
      />
      <img
        style={getImageStyles({
          orbit: "wideOrbit",
          time: 2 + speedAlteration,
        })}
        ref={(ref) => {
          if (ref) {
            ref.style.animationPlayState = clicked ? "running" : "paused";
          }
        }}
        src="/nic-staring.png"
      />
    </span>
  );
};

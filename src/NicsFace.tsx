import { MouseEventHandler, useCallback, useState } from "react";

interface Props {
  mouseCoordinates: number[];
  clicked: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

export const NicsFace = ({ mouseCoordinates, clicked, onClick }: Props) => {
  const [speedAlteration, setSpeedAlteration] = useState(1);

  window.document.body.onkeydown = (e) => {
    if (e.key === "ArrowUp") {
      const newSpeed = Number((speedAlteration * 0.99).toFixed(3));
      setSpeedAlteration(newSpeed);
    } else if (e.key === "ArrowDown") {
      const newSpeed = Number((speedAlteration / 0.99).toFixed(3));
      setSpeedAlteration(newSpeed);
    }
  };

  const getImageStyles = useCallback(
    (args?: {
      time: number;
      orbit: "medOrbit" | "narrowOrbit" | "wideOrbit" | "rotatay";
    }) => {
      const style = { borderRadius: "5px", height: "48px" };
      if (!args) {
        return style;
      }
      return {
        MozAnimation: `${args.orbit} ${args.time}s linear infinite`,
        WebkitAnimation: `${args.orbit} ${args.time}s linear infinite`,
        OAnimation: `${args.orbit} ${args.time}s linear infinite`,
        animation: `${args.orbit} ${args.time}s linear infinite`,
        ...style,
      };
    },
    []
  );

  return (
    <>
      <span
        style={{
          position: "absolute",
          top: "20px",
          left: "-25px",
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
            time: 1.5 * speedAlteration,
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
            time: 0.9 * speedAlteration,
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
            time: 2 * speedAlteration,
          })}
          ref={(ref) => {
            if (ref) {
              ref.style.animationPlayState = clicked ? "running" : "paused";
            }
          }}
          src="/nic-staring.png"
        />
      </span>
      <span
        style={{
          position: "absolute",
          top: "20px",
          left: "-25px",
          transform: `translate(${mouseCoordinates[1] + 10}px, ${
            mouseCoordinates[0] - 40
          }px)`,
          transition: "0ms",
        }}
        onClick={onClick}
      >
        <img
          style={getImageStyles({
            orbit: "rotatay",
            time: 2 * speedAlteration,
          })}
          ref={(ref) => {
            if (ref) {
              ref.style.animationPlayState = clicked ? "running" : "paused";
            }
          }}
          src="/nic-playing-piano-large.png"
        />
      </span>
    </>
  );
};

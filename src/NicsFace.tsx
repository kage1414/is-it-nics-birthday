interface Props {
  mouseCoordinates: number[];
  clicked: boolean;
}

export const NicsFace = ({ mouseCoordinates, clicked }: Props) => {
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
        style={{
          MozAnimation: `medOrbit 1.5s linear infinite`,
          WebkitAnimation: `medOrbit 1.5s linear infinite`,
          OAnimation: `medOrbit 1.5s linear infinite`,
          animation: `medOrbit 1.5s linear infinite`,
          borderRadius: "5px",
          height: "48px",
          animationPlayState: clicked ? "running" : "paused",
          MozAnimationPlayState: clicked ? "running" : "paused",
          WebkitAnimationPlayState: clicked ? "running" : "paused",
          OAnimationPlayState: clicked ? "running" : "paused",
        }}
        src="/src/assets/nics-face.png"
      />
      <img
        style={{
          MozAnimation: `narrowOrbit 0.9s linear infinite`,
          WebkitAnimation: `narrowOrbit 0.9s linear infinite`,
          OAnimation: `narrowOrbit 0.9s linear infinite`,
          animation: `narrowOrbit 0.9s linear infinite`,
          borderRadius: "5px",
          height: "36px",
          animationPlayState: clicked ? "running" : "paused",
          MozAnimationPlayState: clicked ? "running" : "paused",
          WebkitAnimationPlayState: clicked ? "running" : "paused",
          OAnimationPlayState: clicked ? "running" : "paused",
        }}
        src="/src/assets/nic-smirking.png"
      />
      <img
        style={{
          MozAnimation: `wideOrbit 2s linear infinite`,
          WebkitAnimation: `wideOrbit 2s linear infinite`,
          OAnimation: `wideOrbit 2s linear infinite`,
          animation: `wideOrbit 2s linear infinite`,
          height: "48px",
          animationPlayState: clicked ? "running" : "paused",
          MozAnimationPlayState: clicked ? "running" : "paused",
          WebkitAnimationPlayState: clicked ? "running" : "paused",
          OAnimationPlayState: clicked ? "running" : "paused",
        }}
        src="/src/assets/nic-staring.png"
      />
    </span>
  );
};

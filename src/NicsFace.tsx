interface Props {
  mouseCoordinates: number[];
}

export const NicsFace = ({ mouseCoordinates }: Props) => {
  return (
    <span
      style={{
        position: "absolute",
        top: "0px",
        left: "0px",
        transform: `translate(${mouseCoordinates[1]}px, ${mouseCoordinates[0]}px)`,
        transition: "800ms",
      }}
    >
      <img
        style={{
          zIndex: -1,
          MozAnimation: `medOrbit 1.5s linear infinite`,
          WebkitAnimation: `medOrbit 1.5s linear infinite`,
          OAnimation: `medOrbit 1.5s linear infinite`,
          animation: `medOrbit 1.5s linear infinite`,
          borderRadius: "5px",
          height: "48px",
        }}
        src="/src/assets/nics-face.png"
      />
      <img
        style={{
          zIndex: -1,
          MozAnimation: `narrowOrbit 0.75s linear infinite`,
          WebkitAnimation: `narrowOrbit 0.75s linear infinite`,
          OAnimation: `narrowOrbit 0.75s linear infinite`,
          animation: `narrowOrbit 0.75s linear infinite`,
          borderRadius: "5px",
          height: "36px",
        }}
        src="/src/assets/nic-smirking.png"
      />
      <img
        style={{
          zIndex: -1,
          MozAnimation: `wideOrbit 2s linear infinite`,
          WebkitAnimation: `wideOrbit 2s linear infinite`,
          OAnimation: `wideOrbit 2s linear infinite`,
          animation: `wideOrbit 2s linear infinite`,
          height: "48px",
        }}
        src="/src/assets/nic-staring.png"
      />
    </span>
  );
};

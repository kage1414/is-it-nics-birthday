interface Props {
  mouseCoordinates: number[];
}

export const NicsFace = ({ mouseCoordinates }: Props) => {
  return (
    <img
      src="src/assets/nics-face.png"
      style={{
        position: "absolute",
        top: mouseCoordinates[0] - 40,
        left: mouseCoordinates[1] - 40,
        zIndex: -1,
      }}
    />
  );
};

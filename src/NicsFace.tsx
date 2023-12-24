interface Props {
  mouseCoordinates: number[];
}

export const NicsFace = ({ mouseCoordinates }: Props) => (
  <img
    src="nics-face.png"
    style={{
      position: "absolute",
      top: mouseCoordinates[0] - 40,
      left: mouseCoordinates[1] - 40,
      zIndex: -1,
    }}
  />
);

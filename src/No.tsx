import { useCallback, useEffect, useState } from "react";
import { getWindowDimensions } from "./utils";

const DEFAULT_FONT_SIZE = 300;
const SCREEN_WIDTH_LIMIT = 750;

export const No = () => {
  const [screenWidth, setScreenWidth] = useState(getWindowDimensions().width);
  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);

  const handleResize = useCallback(() => {
    setScreenWidth(getWindowDimensions().width);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (screenWidth < SCREEN_WIDTH_LIMIT) {
      setFontSize(
        Math.floor((screenWidth / SCREEN_WIDTH_LIMIT) * DEFAULT_FONT_SIZE)
      );
    } else if (
      screenWidth >= SCREEN_WIDTH_LIMIT &&
      fontSize !== DEFAULT_FONT_SIZE
    ) {
      setFontSize(DEFAULT_FONT_SIZE);
    }
  }, [fontSize, screenWidth]);

  return <div style={{ fontSize }}>NO</div>;
};

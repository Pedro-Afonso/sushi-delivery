import { useState } from "react";

export const useMenu = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenuHandler = () => setIsVisible(!isVisible);

  return { isVisible, toggleMenuHandler };
};

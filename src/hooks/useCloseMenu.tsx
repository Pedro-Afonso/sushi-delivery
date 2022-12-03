import { useRef, useEffect } from "react";

const useCloseMenu = (toggleMenuHandler: () => void) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      if (!(e.target instanceof HTMLElement)) return;
      if (!menuRef.current?.contains(e.target)) toggleMenuHandler();
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [toggleMenuHandler]);

  return menuRef;
};

export default useCloseMenu;

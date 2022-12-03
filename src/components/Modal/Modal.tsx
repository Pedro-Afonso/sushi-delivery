import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import styles from "./Modal.module.scss";

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<IModalProps> = ({
  isOpen = true,
  onClose,
  title,
  children,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalWrapper = isOpen ? (
    <>
      <div className={styles.modal}>
        <div className={styles.heading}>
          <h2>{title}</h2>
          <button onClick={onClose}>Fechar</button>
        </div>
        {children}
      </div>
      <div className={styles.overlay} onClick={onClose}></div>
    </>
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalWrapper,
      document.getElementById("modal-root")!
    );
  } else {
    return null;
  }
};

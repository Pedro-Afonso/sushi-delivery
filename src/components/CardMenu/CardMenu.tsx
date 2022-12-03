import { forwardRef } from "react";
import styles from "./CardMenu.module.scss";

interface ICardMenuProps {
  children: React.ReactNode;
}

export const CardMenu = forwardRef<HTMLDivElement, ICardMenuProps>(
  ({ children }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <div>
          <ul className={styles.list}>{children}</ul>
        </div>
      </div>
    );
  }
);

CardMenu.displayName = "Card Menu";

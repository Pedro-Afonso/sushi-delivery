import Link from "next/link";

import styles from "./Step.module.css";

interface IStepsProps {
  current: number;
  total?: number;
}

export const Steps: React.FC<IStepsProps> = ({ current, total = 3 }) => {
  const activeList = Array.from({ length: total }, (_, i) => {
    return current > i ? true : false;
  });

  return (
    <div className={styles.container}>
      {activeList.map((isActive, i) => {
        return (
          <div key={i} className={styles.step}>
            <Link href={`/Etapa0${i + 1}`}>
              <button disabled={!isActive}>{i + 1}</button>
            </Link>

            {total !== i + 1 && (
              <span className={current > 1 + i ? styles.fill : ""}></span>
            )}
          </div>
        );
      })}
    </div>
  );
};

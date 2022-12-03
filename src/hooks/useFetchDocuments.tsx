import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const useFetchDocuments = <T,>(collectionName: string) => {
  const [documents, setDocuments] = useState<T[]>([]);

  useEffect(() => {
    const coll = collection(db, collectionName);
    const unsubscribe = onSnapshot(
      coll,
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        setDocuments(data as T[]);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => unsubscribe();
  }, [collectionName]);

  return { documents };
};

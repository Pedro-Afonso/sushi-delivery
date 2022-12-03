import { useState, useEffect, useRef } from "react";

import { doc, DocumentData, getDoc } from "firebase/firestore";

import { db } from "../config/firebase";

export const useFetchDocument = <T>(docCollection: string, id?: string) => {
  const [document, setDocument] = useState<T | DocumentData>();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  //deal with memory leak
  const isCancelled = useRef(false);

  useEffect(() => {
    const loadDocument = async () => {
      if (isCancelled.current) return;
      if (!id) return;

      setLoading(true);

      try {
        const docRef = doc(db, docCollection, id);

        const docSnap = await getDoc(docRef);

        setDocument(docSnap.data());
      } catch (error: any) {
        console.log(error);
        if (error.message) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadDocument();
  }, [docCollection, id]);

  useEffect(() => {
    return () => {
      isCancelled.current = true;
    };
  }, []);

  return { document, loading, error };
};

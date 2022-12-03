import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useFirestore = (docCollection: any) => {
  const updateDocument = async (id: string, data: { [x: string]: any }) => {
    const docRef = doc(db, docCollection, id);
    await updateDoc(docRef, data);
  };

  return { updateDocument };
};

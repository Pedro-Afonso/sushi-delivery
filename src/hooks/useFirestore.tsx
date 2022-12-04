import { doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export const useFirestore = (docCollection: any) => {
  const updateDocument = async (id: string, data: { [x: string]: any }) => {
    const docRef = doc(db, docCollection, id);
    try {
      await updateDoc(docRef, data);
    } catch (error) {
      console.log(error);
    }
  };

  return { updateDocument };
};

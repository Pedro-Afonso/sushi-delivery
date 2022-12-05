import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../config/firebase";

export const useFirestore = (docCollection: any) => {
  const addDocument = async (data: { [x: string]: any }) => {
    const coll = collection(db, docCollection);

    try {
      await addDoc(coll, data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDocument = async (id: string, data: { [x: string]: any }) => {
    const docRef = doc(db, docCollection, id);

    try {
      await updateDoc(docRef, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDocument = async (id: string) => {
    const docRef = doc(db, docCollection, id);

    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.log(error);
    }
  };

  return { addDocument, updateDocument, deleteDocument };
};

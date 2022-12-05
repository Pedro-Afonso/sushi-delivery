import { collection, getDocs } from "firebase/firestore";
import { IProduct } from "../components/interface";
import { db } from "../config/firebase";

export const fetchProducts = async (): Promise<IProduct[]> => {
  try {
    const coll = collection(db, "products");
    const querySnapshot = await getDocs(coll);

    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IProduct[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

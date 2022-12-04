import { useState, useEffect } from "react";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase";
import { v4 } from "uuid";

export const useStorage = () => {
  const uploadImage = async (imageUpload: File) => {
    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);

    await uploadBytes(imageRef, imageUpload);

    return await getDownloadURL(imageRef);
  };

  return { uploadImage };
};

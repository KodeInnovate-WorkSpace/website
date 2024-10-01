// src/contexts/FirebaseContext.js
import React, { createContext, useContext } from "react";
import { db } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = ({ children }) => {
  const fetchData = async (collectionName) => {
    console.log(`Fetching data from ${collectionName}`);
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Fetched data:", data);
    return data;
  };

  const addData = async (collectionName, newData) => {
    const docRef = await addDoc(collection(db, collectionName), newData);
    return docRef.id;
  };

  const updateData = async (collectionName, id, updatedData) => {
    const docRef = doc(db, collectionName, id);
    await updateDoc(docRef, updatedData);
  };

  const deleteData = async (collectionName, id) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);
  };

  return (
    <FirebaseContext.Provider
      value={{ fetchData, addData, updateData, deleteData }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

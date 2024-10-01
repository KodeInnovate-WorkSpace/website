import { useFirebase } from "../context/firebase.context";

const useAddData = () => {
  const { addData } = useFirebase();

  const addNewData = async (collectionName, newData) => {
    const newDocId = await addData(collectionName, newData);
    return newDocId;
  };

  return { addNewData };
};

export default useAddData;

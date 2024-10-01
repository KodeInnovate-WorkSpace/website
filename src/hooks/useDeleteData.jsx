import { useFirebase } from "../context/firebase.context";

const useDeleteData = () => {
  const { deleteData } = useFirebase();

  const deleteExistingData = async (collectionName, id) => {
    await deleteData(collectionName, id);
  };

  return { deleteExistingData };
};

export default useDeleteData;

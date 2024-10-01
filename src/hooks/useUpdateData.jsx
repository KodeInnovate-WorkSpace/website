import { useFirebase } from '../context/firebase.context';

const useUpdateData = () => {
  const { updateData } = useFirebase();

  const updateExistingData = async (collectionName, id, updatedData) => {
    await updateData(collectionName, id, updatedData);
  };

  return { updateExistingData };
};

export default useUpdateData;

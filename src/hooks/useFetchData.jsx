import { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase.context";

const useFetchData = (collectionName) => {
  const { fetchData } = useFirebase();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(collectionName);
      setData(fetchedData);
      setLoading(false);
    };

    getData();
  }, [collectionName, fetchData]);

  return { data, loading };
};

export default useFetchData;

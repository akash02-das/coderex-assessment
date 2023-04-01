import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useUser = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  const { userId } = useParams();

  useEffect(() => {
    setLoading(true);

    axios
      .get(`https://dummyjson.com/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`https://dummyjson.com/users/${userId}/posts`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [userId]);

  return { data, loading, error, user };
};

export default useUser;

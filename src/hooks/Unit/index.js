import { useState, useEffect } from 'react';
import axios from 'axios';

const useUnit = (token) => {
  const [units, setUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUnits = async () => {
      setIsLoading(true);

      try {
        const response = await axios.get('http://localhost:8000/api/units', {
          headers: {
            Authorization: `Bearer 1|fN26BPUk1tdU855MRnqrtgJwf077wV7djwvHcAKw`,
          },
        });
        setUnits(response.data.data.data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUnits();
  }, [token]);

  return { units, isLoading, error };
};

export default useUnit;

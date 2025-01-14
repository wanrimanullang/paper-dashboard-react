import { useState, useEffect } from 'react';
import axios from 'axios';

const useUnit = (page) => {
  const [units, setUnits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUnits = async () => {
      setIsLoading(true);

      try {
        const Auth = localStorage.getItem('auth');
        const response = await axios.get(`http://localhost:8000/api/units?page=${page}`, {
          headers: {
            Authorization: `Bearer ${Auth}`,
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
  }, [page]);

  return { units, isLoading, error };
};

export default useUnit;

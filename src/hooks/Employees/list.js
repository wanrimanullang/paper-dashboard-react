import { useState, useEffect } from "react";
import axios from "axios";

const useEmployees = (token) => {
  const [employees, setEmployees] = useState([]);
  

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const Auth = localStorage.getItem('auth');
        const response = await axios.get("http://localhost:8000/api/employees", {
          headers: {
            Authorization: `Bearer ${Auth}`,
          },
        });
        setEmployees(response.data.top_employees.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    fetchEmployees();
  }, [token]);

  return employees;
};

export default useEmployees;

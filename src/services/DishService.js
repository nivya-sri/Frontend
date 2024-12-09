import axios from "axios";

const API_URL = "http://localhost:8081/api/dishes"; // Replace with your actual API endpoint

// Define all service methods
const DishService = {
  getAll: () => axios.get(API_URL),
  get: (id) => axios.get(`${API_URL}/${id}`),
  create: (data) => axios.post(API_URL, data),
  update: (id, data) => axios.put(`${API_URL}/${id}`, data),
  remove: (id) => axios.delete(`${API_URL}/${id}`),
};

// Export the object with a variable name
export default DishService;

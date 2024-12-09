import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import dishService from '../services/DishService';
import Logout from './Logout'; // Import the Logout component

const DishList = () => {
  const [dishes, setDishes] = useState([]);

  const init = () => {
    dishService
      .getAll()
      .then((response) => {
        console.log('Printing dishes data', response.data);
        setDishes(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) => {
    console.log('Printing id', id);
    dishService
      .remove(id)
      .then((response) => {
        console.log('Dish deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  return (
    <div className="container">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center my-4">
        <h3>Available Dishes</h3>
        <Logout />
      </div>

      {/* Add Dish Button */}
      <div className="text-right mb-3">
        <Link to="/add" className="btn btn-success">
          + Add Dish
        </Link>
      </div>

      {/* Dishes Table */}
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dishes.map((dish) => (
            <tr key={dish.id}>
              <td>{dish.name}</td>
              <td>{dish.description}</td>
              <td>${dish.price}</td>
              <td>
                <Link to={`/dishes/edit/${dish.id}`} className="btn btn-info btn-sm">
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm ml-2"
                  onClick={() => handleDelete(dish.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DishList;

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import dishService from "../services/DishService"; // Replace with your actual service

const AddDish = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  const { id } = useParams(); // Get the dish ID for edit

  useEffect(() => {
    if (id) {
      // If there's an ID, fetch the existing dish for editing
      dishService
        .get(id)
        .then((response) => {
          setName(response.data.name);
          setDescription(response.data.description);
          setPrice(response.data.price);
        })
        .catch((error) => {
          console.log("Something went wrong while fetching the dish", error);
        });
    }
  }, [id]);

  const saveDish = (e) => {
    e.preventDefault();

    const dish = { name, description, price };
    if (id) {
      // Update dish
      dishService
        .update(id, dish)
        .then((response) => {
          console.log("Dish updated successfully", response.data);
          navigate("/dishlist");
        })
        .catch((error) => {
          console.log("Something went wrong while updating the dish", error);
        });
    } else {
      // Create new dish
      dishService
        .create(dish)
        .then((response) => {
          console.log("Dish added successfully", response.data);
          navigate("/dishlist");
        })
        .catch((error) => {
          console.log("Something went wrong while creating the dish", error);
        });
    }
  };

  return (
    <div className="container">
      <h3>{id ? "Edit Dish" : "Add New Dish"}</h3>
      <hr />
      <form onSubmit={saveDish}>
        <div className="form-group">
          <label htmlFor="name">Dish Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter dish name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            className="form-control"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter dish description"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter price"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {id ? "Update Dish" : "Save Dish"}
          </button>
        </div>
      </form>
      <hr />
      <Link to="/dishlist">Back to List</Link>
    </div>
  );
};

export default AddDish;

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRentalById, updateRental } from "../api/api";

function RentalUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  useEffect(() => {
    const fetchRental = async () => {
      const data = await getRentalById(id);
      setForm(data);
    };
    fetchRental();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateRental(id, form);
    navigate(`/rentals/${id}`);
  };

  return (
    <div>
      <h1>Update Rental</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="movieName"
          value={form.movieName}
          onChange={handleChange}
          required
        />
        <input
          type="datetime-local"
          name="pickUpTime"
          value={form.pickUpTime}
          onChange={handleChange}
          required
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default RentalUpdate;

import React, { useState } from 'react';
import './form.css';

const Form = ({ addBattle }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    style: '',
    date: '',
    time: '',
    likesFirstName: 0,
    likesLastName: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBattle(formData);
    setFormData({
      firstName: '',
      lastName: '',
      style: '',
      date: '',
      time: '',
      likesFirstName: 0,
      likesLastName: 0
    });
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Ajouter une Battle</h2>
      <div className="form-group">
        <label>Danseur 1 :</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Danseur 2 :</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Style :</label>
        <input type="text" name="style" value={formData.style} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Date :</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label>Heure :</label>
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
      </div>
      <button type="submit" className="button">Ajouter</button>
    </form>
  );
};

export default Form;
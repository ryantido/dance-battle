import React from 'react';

const Filter = ({ onFilterChange }) => {
  const handleInputChange = (e) => {
    onFilterChange(e.target.value);
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Rechercher par nom ou style..."
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Filter;
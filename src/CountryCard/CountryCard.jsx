import React from 'react';
import './CountryCard.css';

const countryCard = ({ country }) => {
  return (
    <div className="countryCard">
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
      <h3>{country.name.common}</h3>
    </div>
  );
};

export default countryCard;

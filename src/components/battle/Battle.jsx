import React from 'react';
import './battle.css';

const Battle = ({ name, name2, style, date, time, likesFirstName, likesLastName, onLikeFirstName, onLikeLastName, onViewDetails }) => {
  return (
    <div className="battle">
      <h3>{name} vs {name2}</h3>
      <p>Style : {style}</p>
      <p>Date : {date} à {time}</p>
      <div className="likes">
        <button className="button like-button" onClick={onLikeFirstName}>
          ❤️ {name} ({likesFirstName})
        </button>
        <button className="button like-button" onClick={onLikeLastName}>
          ❤️ {name2} ({likesLastName})
        </button>
      </div>
      <button className="button" onClick={onViewDetails}>Voir plus</button>
    </div>
  );
};

export default Battle;
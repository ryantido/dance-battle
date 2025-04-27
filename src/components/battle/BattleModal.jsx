import React from 'react';
import './battle.css';

const BattleModal = ({ 
  isOpen, onClose, dancer1, dancer2, 
  // style, likesFirstName, likesLastName 
}) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Détails des danseurs</h2>
        <p>
          <b>Danseur 1 :</b> {dancer1}<br/>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;<b>Style :</b> {style}
          &nbsp;&nbsp;&nbsp;&nbsp;<b>Likes :</b> {likesFirstName} */}
        </p>
        <p>
          <b>Danseur 2 :</b> {dancer2}
          {/* &nbsp;&nbsp;&nbsp;&nbsp;<b>Style :</b> {style}
          &nbsp;&nbsp;&nbsp;&nbsp;<b>Likes :</b> {likesLastName} */}
        </p>
      </div>
    </div>
  );
};

export default BattleModal;
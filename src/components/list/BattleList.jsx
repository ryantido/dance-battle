import BattleModal from '../battle/BattleModal';
import React, { useEffect, useState } from 'react';
import Battle from '../battle/Battle';

const BattleList = ({ battles }) => {

  const [selectedBattle, setSelectedBattle] = useState(null);
  const [battlesState, setBattlesState] = useState(battles);

  useEffect(() => {
    setBattlesState(battles);
  }, [battles]);

  const handleViewDetails = (battle) => {
    setSelectedBattle(battle);
  };

  const handleCloseModal = () => {
    setSelectedBattle(null);
  };

  const handleLike = (index, dancer) => {
    setBattlesState((prevBattles) =>
      prevBattles.map((battle, i) =>
        i === index
          ? {
              ...battle,
              likesFirstName: dancer === 'firstName' ? battle.likesFirstName + 1 : battle.likesFirstName,
              likesLastName: dancer === 'lastName' ? battle.likesLastName + 1 : battle.likesLastName,
            }
          : battle
      )
    );
  };

  return (
    <div className="battle-list">
      {battlesState.length > 0 ? (
        battlesState.map((battle, index) => (
          <Battle
          key={index}
          name={battle.firstName}
          name2={battle.lastName}
          style={battle.style}
          date={battle.date}
          time={battle.time}
          likesFirstName={battle.likesFirstName}
          likesLastName={battle.likesLastName}
          onLikeFirstName={() => handleLike(index, 'firstName')}
          onLikeLastName={() => handleLike(index, 'lastName')}
          onViewDetails={() => handleViewDetails(battle)}          
          />
        ))
      ) : (
        <p>Aucune battle trouvée.</p>
      )}
      <BattleModal
        isOpen={!!selectedBattle}
        onClose={handleCloseModal}
        dancer1={selectedBattle?.firstName}
        dancer2={selectedBattle?.lastName}        
      />
    </div>
  );
};

export default BattleList;
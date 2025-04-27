import React, { useState } from 'react';
import './App.css';
import Form from './components/form/Form';
import BattleList from './components/list/BattleList';
import Filter from './components/filters/Filter';

const App = () => {
  const [battles, setBattles] = useState([]);
  const [filter, setFilter] = useState('');
  const [view, setView] = useState('list'); 

  const addBattle = (battleData) => {
    setBattles([...battles, battleData]);
    setView('list'); 
  };

  const handleFilterChange = (searchTerm) => {
    setFilter(searchTerm); 
  };

  const filteredBattles = battles.filter(
    (battle) =>
      battle.firstName.toLowerCase().includes(filter.toLowerCase()) ||
      battle.lastName.toLowerCase().includes(filter.toLowerCase()) ||
      battle.style.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Battle de Danse</h1>
      <nav>
        <button className="button" onClick={() => setView('list')}>Voir la Liste</button>
        &nbsp;&nbsp;
        <button className="button" onClick={() => setView('form')}>Ajouter une Battle</button>
      </nav>
        <br/>
      {view === 'list' && (
        <>
          <Filter onFilterChange={handleFilterChange} />
          <BattleList battles={filteredBattles} />
        </>
      )}
      {view === 'form' && <Form addBattle={addBattle} />}
    </div>
  );
};

export default App;
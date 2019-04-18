import React from 'react';
import List from "./composition/List";
import './App.css';

function App(props) {
  const lists = props.store.lists;

  const allCards = props.store.allCards;

  console.log(lists, allCards);

  const arrayList = lists.map(i => (
    <List />
  )

  )

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {/* content goes here */}
      </div>
    </main>
  );
}

export default App;
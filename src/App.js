import React from 'react';
import List from "./composition/List";
import './App.css';

function App(props) {
  const lists = props.store.lists;

  const allCards = props.store.allCards;

  const arrayList = lists.map(i => (
    <List
      key={i.id} 
      id={i.id}
      header={i.header}
      cards={i.cardIds.map(x => {
          const obj = {};
          obj.id = x;
          obj.title = allCards[x].title;
          obj.content = allCards[x].content;
          return obj;
        }
      )}
    >
    </List>
    )
  )

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-list'>
        {arrayList}
      </div>
    </main>
  );
}

export default App;
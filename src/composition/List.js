import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {

  const cardDiv = props.cards.map(i => (
    <Card
      key={i.id}
      id={i.id}
      title={i.title}
      content={i.content}
    >
    </Card>
    ) 
  )

  return (
    <section className='List' key={props.id}>
      <header className='List-header'>
        <h2>{props.header}</h2>
      </header>
      <div className='List-cards'>
        {cardDiv}
      </div>
    </section>
  );
}

export default List
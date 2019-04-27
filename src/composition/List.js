import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component {
  static defaultProps = {
    onClickAdd: () => {},
  }

  makeCards = () => {
    const cardDiv = this.props.cards.map(i => (
      <Card
        key={i.id}
        id={i.id}
        title={i.title}
        content={i.content}
        deleteItem={this.props.deleteItem}
      >
      </Card>
      ) 
    )
    return cardDiv
  }

  render() {
    return (
      <section className='List' key={this.props.id}>
        <header className='List-header'>
          <h2>{this.props.header}</h2>
        </header>
        <div className='List-cards'>
          {this.makeCards()}
          <button 
            onClick={() => this.props.addItem(this.props.id)}
            key={this.props.id}
          >
            + Add Random Item
          </button>
        </div>
      </section>
    );
  }
}

export default List
import React from 'react';
import './Card.css'

class Card extends React.Component {
  render() {
    return (
      <div className='Card' key={this.props.id}>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
        <button onClick={() => this.props.deleteItem(this.props.id)}>Delete</button>
      </div>
    )
  } 
}


export default Card;
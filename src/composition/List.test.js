import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

const cards = [{
  title: 'test',
  content: 'test',
  id: 'z'
}];

describe('List component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List className='List' cards={cards} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List className='List' cards={cards} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });

});
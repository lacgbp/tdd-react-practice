import React from 'react';
import ReactDOM from 'react-dom';

import { shallow } from 'enzyme';

import App from './App';

describe('Jest deafult test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('Enzyme default test', () => {
  it('render snapshot', () => {
    const snapShot = shallow(<App />);
    expect(snapShot).toMatchSnapshot();
  });
})

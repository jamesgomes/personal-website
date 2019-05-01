import React from 'react';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../../components/Home/Home';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

it('Renders correct', () => {
  const component = mount(<Home />);
  expect(component).toHaveLength(1);
});

it('Renders correct set isStartDelay', () => {
  Storage.prototype.getItem = jest.fn(() => 6000);
  const component = mount(<Home />);
  expect(component).toHaveLength(1);
});

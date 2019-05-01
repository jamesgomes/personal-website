import React from 'react';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sobre from '../../../components/Sobre/Sobre';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

it('Renders correct', () => {
  const component = mount(<Sobre />);
  expect(component).toHaveLength(1);
});

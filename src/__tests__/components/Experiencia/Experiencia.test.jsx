import React from 'react';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Experiencia from '../../../components/Experiencia/Experiencia';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

it('Renders correct', () => {
  const component = mount(<Experiencia />);
  expect(component).toHaveLength(1);
});

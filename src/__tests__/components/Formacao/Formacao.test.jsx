import React from 'react';
import 'babel-polyfill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Formacao from '../../../components/Formacao/Formacao';

Enzyme.configure({ adapter: new Adapter() });
const { mount } = Enzyme;

it('Renders correct', () => {
  const component = mount(<Formacao />);
  expect(component).toHaveLength(1);
});

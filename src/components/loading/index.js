import React from 'react';
import PropTypes from 'prop-types';
import { Container, Load } from './styles';

export default function Loading({ active, children }) {
  return <Container>{active ? <Load /> : children}</Container>;
}

Loading.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

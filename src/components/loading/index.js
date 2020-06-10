import React from 'react';
import PropTypes from 'prop-types';
import { Container, Load } from './styles';

export default function Loading({ active, children }) {
  return active ? (
    <Container>
      <Load />
    </Container>
  ) : (
    children
  );
}

Loading.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired,
};

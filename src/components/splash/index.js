import React from 'react';
import { Container } from './styles';

const splashImage = require('../../assets/images/splash.jpg');

export default function Splash() {
  return <Container source={splashImage} />;
}

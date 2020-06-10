import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
import {
  Container,
  ContainerImage,
  ContainerTitle,
  Title,
  Image,
} from './styles';

export default function DrinkCard({ id, image, drinkName }) {
  const navigation = useNavigation();

  function handleNavigation() {
    navigation.navigate('DrinkDetail', { id });
  }

  return (
    <Container onPress={handleNavigation} style={{ elevation: 6 }}>
      <ContainerImage>
        <Image source={{ uri: image }} />
      </ContainerImage>
      <ContainerTitle>
        <Title>{drinkName}</Title>
      </ContainerTitle>
    </Container>
  );
}

DrinkCard.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  drinkName: PropTypes.string.isRequired,
};

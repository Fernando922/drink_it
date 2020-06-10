import React from 'react';
import { BackHandler, Alert } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container,
  Title,
  Header,
  Body,
  Footer,
  ContainerImage,
  TextVersion,
  ContainerTextHeader,
  ButtonRoute,
  TextButtonRoute,
  TitleGroup,
  ButtonExitIcon,
  ButtonExit,
  ButtonExitText,
} from './styles';

const profileImage = require('../../assets/images/splash.jpg');

export default function Drawer({ navigation }) {
  function selectRoute(route) {
    navigation.navigate('Main', {
      screen: 'Drinks',
      params: { query: route },
    });
  }

  function exitApp() {
    Alert.alert('Close App', 'Will you really leave us?', [
      { text: 'no' },
      { text: 'sorry!', onPress: () => BackHandler.exitApp() },
    ]);
  }

  function findYourDrink() {
    navigation.navigate('Search', {
      screen: 'SearchDrinks',
    });
  }

  function chooseForMe() {
    navigation.navigate('Main', {
      screen: 'DrinkDetail',
    });
  }

  return (
    <Container>
      <Header>
        <ContainerImage source={profileImage} />
        <ContainerTextHeader>
          <Title>Drink It!</Title>
          <TextVersion>v. 1.0.0</TextVersion>
        </ContainerTextHeader>
      </Header>
      <Body>
        <TitleGroup>Categories</TitleGroup>
        <ButtonRoute onPress={() => selectRoute('a=Alcoholic')}>
          <TextButtonRoute>Alcoholics</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={() => selectRoute('a=Non_Alcoholic')}>
          <TextButtonRoute>Non Alcoholic</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={() => selectRoute('c=Ordinary_Drink')}>
          <TextButtonRoute>Ordinary Drinks</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute last onPress={() => selectRoute('c=Cocktail')}>
          <TextButtonRoute>Cocktails</TextButtonRoute>
        </ButtonRoute>
        <TitleGroup>Types of Glasses</TitleGroup>
        <ButtonRoute onPress={() => selectRoute('g=Cocktail_glass')}>
          <TextButtonRoute>Cocktail Glass</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute last onPress={() => selectRoute('g=Champagne_flute')}>
          <TextButtonRoute>Champagne Flute</TextButtonRoute>
        </ButtonRoute>
        <TitleGroup>Other Options</TitleGroup>
        <ButtonRoute onPress={findYourDrink}>
          <TextButtonRoute>Find Your Drink</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute onPress={chooseForMe}>
          <TextButtonRoute>Choose For Me!</TextButtonRoute>
        </ButtonRoute>
      </Body>
      <Footer>
        <ButtonExit onPress={exitApp}>
          <ButtonExitIcon />
          <ButtonExitText>Exit the Application</ButtonExitText>
        </ButtonExit>
      </Footer>
    </Container>
  );
}

Drawer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

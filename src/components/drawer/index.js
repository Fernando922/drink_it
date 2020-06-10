import React from 'react';
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

export default function Drawer() {
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
        <ButtonRoute>
          <TextButtonRoute>Alcoholics</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute>
          <TextButtonRoute>Non Alcoholic</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute>
          <TextButtonRoute>Ordinary Drinks</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute last>
          <TextButtonRoute>Cocktails</TextButtonRoute>
        </ButtonRoute>
        <TitleGroup>Types of Glasses</TitleGroup>
        <ButtonRoute>
          <TextButtonRoute>Cocktail Glass</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute last>
          <TextButtonRoute>Champagne Flute</TextButtonRoute>
        </ButtonRoute>
        <TitleGroup>Other Options</TitleGroup>
        <ButtonRoute>
          <TextButtonRoute>Find Your Drink</TextButtonRoute>
        </ButtonRoute>
        <ButtonRoute>
          <TextButtonRoute>Choose For Me!</TextButtonRoute>
        </ButtonRoute>
      </Body>
      <Footer>
        <ButtonExit>
          <ButtonExitIcon />
          <ButtonExitText>Exit the Application</ButtonExitText>
        </ButtonExit>
      </Footer>
    </Container>
  );
}

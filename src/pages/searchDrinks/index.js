import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import {
  Container,
  Input,
  ContainerInput,
  SearcIcon,
  ContainerRadios,
  Radio,
  RadioContent,
  RadioGroup,
  OptionText,
} from './styles';
import DrinkCard from '../../components/drinkCard';
import Loading from '../../components/loading';
import api from '../../services/api';

let timer = 0;

export default function Drinks() {
  const [loading, setLoading] = useState(true);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const [drinks, setDrinks] = useState([]);
  const [nameSearch, setNameSearch] = useState(true);
  const [ingredientSearch, setIngredientSeach] = useState(false);

  function findDefaultDrinks() {
    return api
      .get(`/filter.php?c=Cocktail`)
      .then((res) => setDrinks(res.data.drinks))
      .then(() => setLoading(false));
  }

  function findFilteredDrinks(text) {
    function fetchDrinks() {
      setLoadingFilter(true);
      return api
        .get(`/${nameSearch ? 'search.php?s' : 'filter.php?i'}=${text}`)
        .then((res) => setDrinks(res.data.drinks))
        .then(() => setLoadingFilter(false));
    }

    clearTimeout(timer);

    timer = setTimeout(() => {
      fetchDrinks();
    }, 800);
  }

  function filterList(text) {
    if (text) {
      findFilteredDrinks(text);
    } else {
      clearTimeout(timer);
      findDefaultDrinks();
    }
  }

  useEffect(() => {
    filterList();
  }, [nameSearch, ingredientSearch]);

  function handleSearchName() {
    setNameSearch(true);
    setIngredientSeach(false);
  }

  function handleSearchIngredient() {
    setNameSearch(false);
    setIngredientSeach(true);
  }

  return (
    <Loading active={loading}>
      <Container>
        <ContainerInput>
          <Input onChangeText={(text) => filterList(text)} />
          <SearcIcon />
        </ContainerInput>
        <ContainerRadios>
          <RadioGroup onPress={handleSearchName}>
            <Radio>
              <RadioContent selected={nameSearch} />
            </Radio>
            <OptionText>Name</OptionText>
          </RadioGroup>
          <RadioGroup onPress={handleSearchIngredient}>
            <Radio>
              <RadioContent selected={ingredientSearch} />
            </Radio>
            <OptionText>Ingredient</OptionText>
          </RadioGroup>
        </ContainerRadios>

        <Loading active={loadingFilter}>
          <FlatList
            data={drinks}
            renderItem={({ item }) => (
              <DrinkCard
                key={item.idDrink}
                id={item.idDrink}
                image={item.strDrinkThumb}
                drinkName={item.strDrink}
              />
            )}
            keyExtractor={(item) => item.idDrink}
          />
        </Loading>
      </Container>
    </Loading>
  );
}

import React, { useState, useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { Container, CardContainer } from './styles';
import DrinkCard from '../../components/drinkCard';
import Loading from '../../components/loading';
import api from '../../services/api';

export default function Drinks() {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    setLoading(true);
    function findDrinks() {
      let query = 'a=Alcoholic';

      if (route.params) {
        query = route.params.query;
        navigation.setOptions({ title: route.params.title });
      }
      return api
        .get(`/filter.php?${query}`)
        .then((res) => setDrinks(res.data.drinks))
        .then(() => setLoading(false));
    }

    findDrinks();
  }, [route]);

  return (
    <Loading active={loading}>
      <Container>
        {drinks.length > 0 && (
          <FlatList
            data={drinks}
            renderItem={({ item }) => (
              <CardContainer>
                <DrinkCard
                  key={item.idDrink}
                  id={item.idDrink}
                  image={item.strDrinkThumb}
                  drinkName={item.strDrink}
                />
              </CardContainer>
            )}
            keyExtractor={(item) => item.idDrink}
          />
        )}
      </Container>
    </Loading>
  );
}

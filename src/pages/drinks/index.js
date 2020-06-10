import React, { useState, useEffect } from 'react';
import { Container, Scroll } from './styles';
import DrinkCard from '../../components/drinkCard';
import Loading from '../../components/loading';
import api from '../../services/api';

export default function Drinks() {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    function findDrinks() {
      return api
        .get(`/filter.php?a=Alcoholic`)
        .then((res) => setDrinks(res.data.drinks))
        .then(() => setLoading(false));
    }

    findDrinks();
  }, []);

  return (
    <Loading active={loading}>
      <Container>
        <Scroll>
          {drinks.length > 0 &&
            drinks.map((drink) => {
              return (
                <DrinkCard
                  key={drink.idDrink}
                  id={drink.idDrink}
                  image={drink.strDrinkThumb}
                  drinkName={drink.strDrink}
                />
              );
            })}
        </Scroll>
      </Container>
    </Loading>
  );
}

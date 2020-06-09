import * as React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';
import PropTypes from 'prop-types';
import Categories from './pages/categories';
import Drinks from './pages/drinks';
import DrinkDetail from './pages/drinkDetail';
import SearchDrinks from './pages/searchDrinks';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Categories" component={Categories} />
    <Stack.Screen name="Drinks" component={Drinks} />
    <Stack.Screen name="DrinkDetail" component={DrinkDetail} />
  </Stack.Navigator>
);

const StackSearch = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="SearchDrinks"
      component={SearchDrinks}
      options={{
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Text>M</Text>
          </TouchableOpacity>
        ),
      }}
    />
    <Stack.Screen name="DrinkDetail" component={DrinkDetail} />
  </Stack.Navigator>
);

const App = () => (
  <Drawer.Navigator initialRouteName="Main">
    <Drawer.Screen name="Main" component={MainStack} />
    <Drawer.Screen name="Search" component={StackSearch} />
  </Drawer.Navigator>
);

export default App;

MainStack.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

StackSearch.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

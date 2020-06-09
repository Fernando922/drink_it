import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import { createDrawerNavigator } from '@react-navigation/drawer';
import PropTypes from 'prop-types';
import Categories from './pages/categories';
import Drinks from './pages/drinks';
import DrinkDetail from './pages/drinkDetail';
import SearchDrinks from './pages/searchDrinks';
import theme from './theme';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name="Categories"
      component={Categories}
      options={{
        headerTitleStyle: { fontFamily: theme.font },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={24} style={{ marginLeft: 16 }} />
          </TouchableOpacity>
        ),
      }}
    />
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
        headerTitleStyle: { fontFamily: theme.font },
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Icon name="menu" size={24} />
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

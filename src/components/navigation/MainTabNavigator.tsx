//navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GastosStackNavigator from './GastosStackNavigator';
import CategoriasStackNavigator from './CategoriasStackNavigator';

//theme
import { theme } from '../../styles/theme';

//icons
import Ionicons from '@expo/vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.PRIMARY,
        tabBarInactiveTintColor: theme.MUTED,
      }}>
        <Tab.Screen
          name="gastos"
          component={ GastosStackNavigator }
          options={{
            title: 'Gastos',
            tabBarIcon: ({ focused }) => 
              <Ionicons
                name="cash-outline"
                size={ 25 }
                color={ focused ? theme.PRIMARY : theme.MUTED }
              />
          }}
        /> 
        <Tab.Screen
          name="categorias"
          component={ CategoriasStackNavigator }
          options={{
            title: 'Categorías',
            tabBarIcon: ({ focused }) => 
              <Ionicons
                name="list-outline"
                size={ 25 }
                color={ focused ? theme.PRIMARY : theme.MUTED }
              />
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainTabNavigator
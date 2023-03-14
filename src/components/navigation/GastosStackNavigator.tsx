import { createNativeStackNavigator } from '@react-navigation/native-stack'

import GastosScreen from '../gastos/GastosScreen';
import NuevoGasto from '../gastos/NuevoGasto';

import { theme } from '../../styles/theme';

const Stack = createNativeStackNavigator();

const GastosStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.WHITE,
        headerStyle: {
          backgroundColor: theme.PRIMARY
        }
      }}>
        <Stack.Screen name='listadoGastos' component={ GastosScreen } options={{ title: 'Gastos' }} />
        <Stack.Screen name='nuevoGasto' component={ NuevoGasto } options={{ title: 'Nuevo Gasto' }} />
    </Stack.Navigator>
  )
}

export default GastosStackNavigator
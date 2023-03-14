import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CategoriasScreen from '../categorias/CategoriasScreen';
import NuevaCategoria from '../categorias/NuevaCategoria';

import { theme } from '../../styles/theme';

const Stack = createNativeStackNavigator();

const CategoriasStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.WHITE,
        headerStyle: {
          backgroundColor: theme.PRIMARY
        }
      }}>
        <Stack.Screen name='listadoCategorias' component={ CategoriasScreen } options={{ title: 'Categorías' }} />
        <Stack.Screen name='nuevaCategoria' component={ NuevaCategoria } options={{ title: 'Nueva Categoría' }} />
    </Stack.Navigator>
  )
}

export default CategoriasStackNavigator
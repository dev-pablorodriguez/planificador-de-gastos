import { useContext, useState } from 'react';
import { ToastAndroid, View } from 'react-native';

import { FirebaseContext } from '../../firebase/context';
import { AppContext } from '../../context/appContext';

import { Button, Input } from '@rneui/base';
import { globalStyles } from '../../styles/globalStyles';


const NuevaCategoria = ({ navigation }: any) => {
  //ctx
  const firebase = useContext(FirebaseContext);
  const { categories, setLoading } = useContext(AppContext);

  //state
  const [ title, setTitle ] = useState('');

  //logic
  const addCategory = async () => {
    if(!title){
      ToastAndroid.show('El nombre es obligatorio', ToastAndroid.CENTER);
      return;
    }

    if(categories.find( i => i.title.toLowerCase() === title.toLowerCase())){
      ToastAndroid.show('La categoría ingresada ya existe', ToastAndroid.CENTER);
      return;
    }

    setLoading(true);

    await firebase.addCategory({
      title,
      canBeModified: true,
      created: new Date()
    })

    setLoading(false);
    
    ToastAndroid.show('Categoría añadida', ToastAndroid.CENTER);
    navigation.navigate('listadoCategorias');
  }

  return (
    <View>
      <View style={ globalStyles.wrapper }>
        <Input
          placeholder='Ingresar Categoría'
          onChangeText={ setTitle }
        />
        <Button
            containerStyle={ globalStyles.btnContainer }
            buttonStyle={ globalStyles.btnPrimary }
            onPress={ addCategory }
            title='Agregar Categoría'
          />
      </View>

    </View>
  )
}


export default NuevaCategoria
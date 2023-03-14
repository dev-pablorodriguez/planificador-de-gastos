import { useContext, useState } from 'react';
import { ToastAndroid, View, StyleSheet, TextInput, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'

import { FirebaseContext } from '../../firebase/context';

import { Button, Header } from '@rneui/base';
import { globalStyles } from '../../styles/globalStyles';

//icons
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../../styles/theme';

//form
import { AppContext } from '../../context/appContext';
import { convertCategoriaToReferenceCategoria } from '../../helpers';

const NuevoGasto = ({ navigation }: any) => {
  //ctx
  const firebase = useContext(FirebaseContext);
  const { categories } = useContext(AppContext);
  const { setLoading } = useContext(AppContext);

  //state
  const [ title, setTitle ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ desc, setDesc ] = useState('');
  const [ created, setCreated ] = useState();
  const [ category, setCategory ] = useState('');

  const formatAndSetAmount = (input: string) => {
    const n = parseInt(input.replace(/[^0-9]/g, ''));
    setAmount(isNaN(n) ? '' : n.toString())
  }

  const addGasto = async () => {
    if(!title){
      ToastAndroid.show('El nombre es obligatorio', ToastAndroid.CENTER);
      return;
    }

    if(!amount){
      ToastAndroid.show('El monto es obligatorio', ToastAndroid.CENTER);
      return;
    }

    setLoading(true);

    await firebase.addGasto({
      title,
      amount: parseInt(amount),
      desc,
      created: new Date(),
      category: convertCategoriaToReferenceCategoria(categories.find( i => i.id === category)!)
    })
    
    setLoading(false);

    ToastAndroid.show('Gasto añadido', ToastAndroid.CENTER);
    navigation.navigate('listadoGastos');
  }

  return (
    <View>
      <View style={ globalStyles.wrapper }>

        <View style={ globalStyles.inputContainer }>
          <Text style={ globalStyles.inputLabel }>Título</Text>
          <TextInput
            style={ globalStyles.input }
            placeholder='Ingresar título'
            value={ title }
            onChangeText={ setTitle }
          />
        </View>
        <View style={ globalStyles.inputContainer }>
          <Text style={ globalStyles.inputLabel }>Monto</Text>
          <TextInput
            style={ globalStyles.input }
            keyboardType='numeric'
            placeholder='Ingresar monto'
            value={ amount.toString() }
            onChangeText={ formatAndSetAmount }
          />
        </View>
        <View style={ globalStyles.inputContainer }>
          <Text style={ globalStyles.inputLabel }>Descripción</Text>
          <TextInput
            style={ globalStyles.input }
            placeholder='Descripción'
            value={ desc }
            onChangeText={ setDesc }
            numberOfLines={ 2 }
            multiline={ true }
          />
        </View>
        <View style={ globalStyles.inputContainer }>
          <Text style={ globalStyles.inputLabel }>Categoría</Text>
          <Picker
            selectedValue={ category }
            onValueChange={ setCategory }          
          >
            <Picker.Item label='-- Seleccione categoría --' value='' />
            {
              categories.map( i => <Picker.Item key={ i.id } label={ i.title } value={ i.id } /> )
            }
          </Picker>
        </View>

        <Button
            containerStyle={ globalStyles.btnContainer }
            buttonStyle={ globalStyles.btnPrimary }
            onPress={ addGasto }
            title='Agregar Gasto'
          />

      </View>

    </View>
  )
}

export default NuevoGasto
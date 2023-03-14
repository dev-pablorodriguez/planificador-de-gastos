import { Fragment, useContext } from 'react'
import { ScrollView, Text, View } from 'react-native';

import { AppContext } from '../../context/appContext';
import { FirebaseContext } from '../../firebase/context';

import { StyleSheet } from 'react-native'
import { globalStyles } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

import { Avatar, Button, ListItem } from '@rneui/base';


const GastosScreen = ({ navigation }: any) => {
  const firebase = useContext(FirebaseContext);
  const { gastos } = useContext(AppContext);

  return (
    <View style={ styles.container }>
      {
        gastos.length > 0 ? 
          <ScrollView>
            { gastos.map(i => (
                <Fragment key={ i.id }>
                  <ListItem bottomDivider style={{ padding: StyleSheet.hairlineWidth }}>
                    <Avatar size='small' rounded source={{ uri: 'asdf' }} />
                    <ListItem.Content style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View>
                        <ListItem.Title>{ i.title }</ListItem.Title>
                        <ListItem.Subtitle style={ styles.subtitle }>{ i.category.title }</ListItem.Subtitle>
                      </View>
                      <View style={{ alignItems: 'flex-end' }}>
                        <ListItem.Title>${ i.amount }</ListItem.Title>
                        <ListItem.Subtitle style={ styles.subtitle }>
                          { i.created.toLocaleString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' }) }
                        </ListItem.Subtitle>
                      </View>
                    </ListItem.Content>
                  </ListItem>
                </Fragment>
              ))
            }            
          </ScrollView>
          :
          <View style={ globalStyles.wrapper }>
            <Text>Sin Gastos</Text>
          </View>
      }

      <Button
        containerStyle={ globalStyles.btnFloatContainer }
        buttonStyle={ globalStyles.btnPrimary }
        onPress={ () => navigation.navigate('nuevoGasto') }
        title='Nuevo Gasto'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  subtitle: {
    fontSize: 10,
    color: theme.MUTED
  }
})

export default GastosScreen
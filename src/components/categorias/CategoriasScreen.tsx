import { Fragment, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import { Avatar, Button, ListItem } from '@rneui/base'

import { globalStyles } from '../../styles/globalStyles'

const CategoriasScreen = ({ navigation }: any) => {
  const { categories } = useContext(AppContext);

  return (
    <View style={ styles.container }>
      {
        categories.length > 0 ? 
          <ScrollView>
            { categories.map(i => 
              (
                <Fragment key={ i.id }>
                  <ListItem bottomDivider style={{ padding: StyleSheet.hairlineWidth }}>
                    <Avatar size='small' rounded source={{ uri: 'asdf' }} />
                    <ListItem.Content>
                      <ListItem.Title>{ i.title }</ListItem.Title>
                    </ListItem.Content>
                  </ListItem>
                </Fragment>
              ))
            }            
          </ScrollView>
          :
          <View style={ globalStyles.wrapper }>
            <Text>Sin Categorías</Text>
          </View>
      }

      <Button
        containerStyle={ globalStyles.btnFloatContainer }
        buttonStyle={ globalStyles.btnPrimary }
        onPress={ () => navigation.navigate('nuevaCategoria') }
        title='Nueva Categoría'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  }
})

export default CategoriasScreen

import { useContext, useEffect } from 'react';

import { AppContext } from '../context/appContext'
import { FirebaseContext } from '../firebase/context'

import MainTabNavigator from './navigation/MainTabNavigator';

import { SafeAreaView, Text, StyleSheet, StatusBar, Platform } from 'react-native'

import Spinner from 'react-native-loading-spinner-overlay'

const AppWrapper = () => {
  const ctx = useContext(AppContext);
  const firebase = useContext(FirebaseContext);

  useEffect(() => {
    const unsubscribe = firebase.onAuthStateChangedHandler( user => {
      if(user){
        ctx.login(user.uid);
      }else{
        ctx.logout();
      }
    })

    const init = async () => {
      const err = await firebase.login();
      if(err) console.log('err', err)
    }

    init();

    return unsubscribe
  }, [])

  useEffect(() => {
    if(ctx.user.isLogged){
      firebase.getCategories(ctx.setCategories)
      firebase.getGastos(ctx.setGastos)
    }
  }, [ ctx.user.isLogged ])
  return (
    <>
      <Spinner visible={ ctx.isLoading } />
      { 
        ctx.user.isLogged ?
          <MainTabNavigator />
          :
          <SafeAreaView style={ styles.sav }>
            <Text>Error de conexión.</Text>
          </SafeAreaView>
      }
    </>
  )
}

const styles = StyleSheet.create({
  sav: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
})

export default AppWrapper
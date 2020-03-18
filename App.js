import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import {AppNavigation} from './src/navigation/AppNavigation'
import { bootstrap } from './src/bootstrap'
import store from './store/index'

export default function App() {
  const[IsReady, setIsReady]= useState(false);

  if(!IsReady){
    <AppLoading 
    startAsync={bootstrap}
    onFinish={()=>setIsReady(true)} 
    onError={err=>console.log(err)}/>
  }
  return (
    <Provider store={store}>
       <AppNavigation/>
    </Provider>
  );
}

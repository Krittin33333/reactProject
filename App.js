import { View, Text ,StyleSheet} from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
import LotOfGreeting from './components/LotOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import InputText from './components/InputText'
import UserNameandPassword from './components/UserNameandPassword'
const App = () => {
  return (
    <View style = {styles.container}>
      <UserNameandPassword/>
      {/* <Count/> */}
      
        
      
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent:'center',
      alignItems:'center'
      
  },
 
})
import { View, Text } from 'react-native'
import React from 'react'
import Logo from './components/Logo'
import User from './components/User'
const App = () => {
  return (
    <View style = {{marginTop:16,
      marginBottom:16,
      paddingVertical:8,
      borderWidth:4,
      borderColor: "#EA4825",
      borderRadius: 6,
      backgroundColor: "#ffffff",
      color: "#447CEE",
      textAlign: "center",
      fontSize: 40,
      fontWeight: "bold",}}>
      
      <Logo/>
      <Text></Text>
      <view style={{padding:10}}>
          <User/>
      </view>
        

    </View>
  )
}

export default App
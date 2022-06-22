import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const StySheet = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>React Native</Text>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding:24,
        backgroundColor: "#eaeaea"
    },
    title:{
        marginTop:16,
        paddingVertical:8,
        borderWidth:4,
        borderColor: "#EA4825",
        borderRadius: 6,
        backgroundColor: "#ffffff",
        color: "#447CEE",
        textAlign: "center",
        fontSize: 40,
        fontWeight: "bold",
     
    }
})

export default StySheet

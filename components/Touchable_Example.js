import { StyleSheet, Text, View,Touchable,TouchableHighlight,
    TouchableNativeFeedback,TouchableOpacity,TouchableWithoutFeedback,SafeAreaView 
} from 'react-native'
import React from 'react'

const Touchable_Example = () => {
    const onPress = (msg) =>{
        alert('Alert for ; '+ msg);
    };

  return (
    <SafeAreaView style = {{flex:1}}>
        <View style = {styles.container}>
            
            <TouchableNativeFeedback
                style ={styles.button}
                onPress={() => onPress('TouchableNativeFeedback')}
            >   
                <Text> Touchable Native Feedback (only Android) </Text>

            </TouchableNativeFeedback>

            <TouchableHighlight
                style ={styles.button}
                onPress={() => onPress('TouchableHighlight')}
            >   
                <Text> Touchable Highlight </Text>

            </TouchableHighlight>

            <TouchableOpacity
                style ={styles.button}
                onPress={() => onPress('TouchableOpacity')}
            >   
                <Text> Touchable Opacity </Text>

            </TouchableOpacity>

            <TouchableWithoutFeedback
                style ={styles.button}
                onPress={() => onPress('TouchableWithoutFeedback')}
            >   
                <Text> Touchable Without Feedback </Text>

            </TouchableWithoutFeedback>

        </View>
    </SafeAreaView>
  )
}

export default Touchable_Example

const styles = StyleSheet.create({
    container: {
        flex: 1,alignItems: 'center',
        marginTop: 50,},
    button: {
        alignItems: 'center',
        padding:10,
        marginTop:10,
        backgroundColor: '#DDDDDD', //color of button •padding: 10,•width: 300,•marginTop: 16,•},
}
})
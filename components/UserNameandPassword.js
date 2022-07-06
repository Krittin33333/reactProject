import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const UserNameandPassword = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  return (
    <View style={{ flex: 1, marginTop: 20, alignItems: "center" ,justifyContent:'center' }}>
      <TextInput
        value={username}
        onChangeText={(username) => {
          setUsername(username);
        }}
        style={styles.textinput}
        placeholder="Username"
      />
      <TextInput
        value={password}
        onChangeText={(password) => {
         setPassword(password);
        }}
        style={styles.textinput}
        placeholder="password"
      />
      <View style = {{width:300 ,marginTop:20}}>
        <Button onPress= {()=>{alert (username+ '\n' + password)}}
         title="Submit" color="#1D23AE" />
      </View>
    </View>
  );
};

export default UserNameandPassword;

const styles = StyleSheet.create({
  textinput: {
    width: 300,
    height: 40,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#ecfafa",
    borderWidth: 4,
    borderColor: "#1D23AE",
    borderRadius: 6,
    padding: 10,
  },
});

import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";



const App = ()=>{
  const [toggle, setToggle] = useState(false);

  const handleChangeToggle = ()=> setToggle(oldToggle=>!oldToggle);

  useEffect(()=>{
    //liga flash do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    const subscription =RNShake.addListener(()=>{
      setToggle(oldToggle=>!oldToggle);
    });

    //desmontando o listener
    return () => subscription.remove();
  }, [])

  return (
    
  <View style={toggle ? style.containerLight : style.container}>
    <TouchableOpacity onPress={handleChangeToggle}>
      <Image style={toggle ? style.lightingOn : style.lightingOff} source={
          toggle ? require('./assets/icons/eco-light.png'):require('./assets/icons/eco-light-off.png') } />
      <Image style={style.dioLogo} source={
          toggle ? require('./assets/icons/logo-dio.png'):require('./assets/icons/logo-dio-white.png') } />
    </TouchableOpacity>
  </View>
    
    );
};

export default App;

const style = StyleSheet.create({
  container:{
    backgroundColor: 'black',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

 },

  containerLight:{
    backgroundColor: 'white',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',

 },

 lightingOn: {
   resizeMode: 'contain',
   alignSelf: 'center',
   width: 150,
   height: 150,
 },
 lightingOff: {
   resizeMode: 'contain',
   alignSelf: 'center',
   width: 150,
   height: 150,
   tintColor: 'white',
 },
 dioLogo: {
   resizeMode: 'contain',
   alignSelf: 'center',
   width: 250,
   height: 250,
 },
 
});


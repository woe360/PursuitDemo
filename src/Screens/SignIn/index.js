import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up logic here
  };


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', top: 400, }}>
      <ImageBackground
        source={require('../../../assets/images/Homepage.png')}
        style={styles.container}
      >
        <Image
          source={require('../../../assets/images/pursuit.png')}
          style={{
            width: 120,
            height: 120,
            position: 'absolute',
            top: '17%',
            left: '47.5%',
            transform: [{ translateX: -50 }, { translateY: -50 }],
          }}
        />

        <Text style={styles.title}>Sign In</Text>

        <TextInput
          style={styles.input}
          placeholder="abc@email.com"
          value={email}
          onChangeText={(email) => setEmail({ email })}
          width={300}
        />

        <TextInput
          style={styles.input}
          placeholder="Your password"
          secureTextEntry={true}
          value={password}
          onChangeText={(password) => setPassword({ password })}
          width={310}
        />

        <TouchableOpacity onPress={this.handleForgotPassword} style ={styles.forgotPassButton}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.handleSignIn} style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>


        <Text style={{ fontSize: 16, color: 'black', top: '11%', left: '45%' }}>OR</Text>




        <TouchableOpacity onPress={this.handleSignIn} style={styles.buttonGoogle}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../../../assets/images/back.png')} style={{ width: 26, height: 26, left: '70%' }} />
            <Text style={styles.buttonTextGoogle}>Login with Google</Text>
          </View>
        </TouchableOpacity>

        <View style={{flexDirection: 'row', justifyContent: 'center', bottom: -150}}>
          <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Don't have an account? </Text>
          <TouchableOpacity style={styles.alreadyAccButton}>
            <Text style={styles.alreadyAccText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
  // 68 eilutej palikau this.handleSignIn, nes nezinau, kaip ten tiksliai prisijungs prie Google
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    resizeMode: 'cover',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    left: 30,
    top: '3%',
    color: 'white',
  },
  input: {
    height: 56,
    width: 317,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    top: '2.5%',
    left: '8.5%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
  },
  button: {
    width: 273,
    height: 56,
    left: 46,
    top: "5.5%",
    backgroundColor: '#40DA46',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  forgotPassButton: {
    left: '54%',
    top: '3.5%',
  },
  forgotPassText: {
    fontSize: 14,

    color: 'white',
  },
  buttonGoogle:{
    width: 273,
    height: 56,
    left: 41,
    top: 125,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonTextGoogle:{
    fontSize: 16,
    left: '130%',
    color: 'black',
  },
  alreadyAccButton:{
    width: 60,
    height: 25,
  },
  alreadyAccText: {
    fontSize: 14,
    color: '#40DA46',
  },
  container: {
    flex: 1,
    width: '100%', // Ensure it covers the full screen
    height: '100%', // Ensure it covers the full screen
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignIn;


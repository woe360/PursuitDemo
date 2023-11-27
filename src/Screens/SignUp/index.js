// import React, { useState } from 'react';
// import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
//
// const SignUp1 () => {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//
//   handleSignUp = () => {
//     // Implement sign-in logic here
//   };
//
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <ImageBackground source={require('../../../assets/images/backgroundSignIn.png')} resizeMode='cover' style={styles.image}>
//
//         <Image
//           source={require('../../../assets/images/pursuit.png')}
//           style={{
//             width: 70,
//             height: 70,
//             position: 'absolute',
//             top: '15%',
//             left: '53%',
//             transform: [{ translateX: -50 }, { translateY: -50 }],
//           }}
//         />
//
//         <Text style={styles.title}>Sign Up</Text>
//
//         <TextInput
//           style={styles.input}
//           placeholder="Full name"
//           value={fullName}
//           onChangeText={(fullName) => this.setState({ fullName })}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="abc@email.com"
//           value={email}
//           onChangeText={(email) => this.setState({ email })}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Phone number"
//           value={phoneNumber}
//           onChangeText={(phoneNumber) => this.setState({ phoneNumber })}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Your password"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(password) => this.setState({ password })}
//         />
//
//         <TextInput
//           style={styles.input}
//           placeholder="Confirm password"
//           secureTextEntry={true}
//           value={confirmPassword}
//           onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
//         />
//
//         <TouchableOpacity onPress={this.handleSignIn} style={styles.signUpButton}>
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>
//
//         <Text style={{ fontSize: 16, color: 'white', top: '4%', left: '45%' }}>OR</Text>
//
//         <TouchableOpacity onPress={this.handleSignIn} style={styles.buttonGoogle}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <Image source={require('../assets/GoogleLogo.png')} style={{ width: 26, height: 26, left: '70%' }} />
//             <Text style={styles.buttonTextGoogle}>Login with Google</Text>
//           </View>
//         </TouchableOpacity>
//
//         <View style={{flexDirection: 'row', justifyContent: 'center', top: '20%'}}>
//           <Text style={{ fontSize: 14, color: '#FFFFFF' }}>Already have an account? </Text>
//           <TouchableOpacity style={styles.alreadyAccButton}>
//             <Text style={styles.alreadyAccText}>Sign In</Text>
//           </TouchableOpacity>
//         </View>
//
//       </ImageBackground>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     resizeMode: 'cover',
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   form: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     left: 30,
//     top: '2.5%',
//     color: 'white',
//   },
//   input: {
//     height: 56,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     padding: 10,
//     marginBottom: 10,
//     top: '1.5%',
//     left: '8%',
//     backgroundColor: '#ffffff',
//     borderRadius: 10,
//     fontSize: 14,
//     width: 310,
//   },
//   signUpButton: {
//     width: 272,
//     height: 56,
//     left: '13%',
//     top: '3%',
//     backgroundColor: '#40DA46',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   signUpButtonText: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   buttonGoogle:{
//     width: 272,
//     height: 56,
//     left: '13%',
//     top: '5%',
//     backgroundColor: 'white',
//     borderRadius: 10,
//     justifyContent: 'center',
//   },
//   buttonTextGoogle: {
//     fontSize: 16,
//     left: '130%',
//     color: 'black',
//   },
//   alreadyAccButton: {
//     width: 50,
//     height: 25,
//   },
//   alreadyAccText: {
//     color: '#40DA46',
//   },
// });
//
// export default SignUp1;

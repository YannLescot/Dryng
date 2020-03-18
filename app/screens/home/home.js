import React, { Component } from 'react'
import { View, StatusBar, Container, Text, TouchableOpacity, } from 'react-native'
import styles from './styles'
import { Ionicons } from '@expo/vector-icons';
import colors from '../../config/colors'
import * as firebase from 'firebase'

class LoginScreen extends Component {

    signInWithGoogleAsync = async () => {
        try {
          const result = await Google.logInAsync({
            
            behavior: 'web',

            androidClientId: '1087472130717-1h6ug72h85otsqao69vn4koq0t1f2mbh.apps.googleusercontent.com',
            //iosClientId: YOUR_CLIENT_ID_HERE,
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            return result.accessToken;
          } else {
            return { cancelled: true };
          }
        } catch (e) {
          return { error: true };
        }
      };

      render(){
          return(
      
    <View style={styles.background}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text style={styles.txtConnexion}>Connecte toi avec</Text>
        <View style={styles.ligneSeparatrice} />

        <TouchableOpacity style={styles.buttonConnexion} onPress={() => this.signInWithGoogleAsync()}>
        <Ionicons name="logo-google" size={30} color={colors.orange} />
            <Text style={styles.buttonText} >GOOGLE</Text>
        </TouchableOpacity>
       
        <TouchableOpacity style={styles.buttonConnexion}>
        <Ionicons name="logo-facebook" size={30} color={colors.orange} />
        <Text style={styles.buttonText} >FACEBOOK</Text>
        </TouchableOpacity>
        
        <Text>Ou inscrit-toi avec ton e-mail</Text>
    </View>
          )
    }
}

export default LoginScreen;
import React, { Component } from 'react'
import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import loadingScreen from './screens/LoadingScreen'
import loginScreen from './screens/home'
import dashboard from './screens/Dashboard'
import * as firebase from 'firebase';
import firebaseConfig from './config/config'

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default class App extends React.Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}

const AppSwitchNavigator = createSwitchNavigator({
    LoadingScreen:loadingScreen,
    LoginScreen:loginScreen,
    Dashboard:dashboard,
})

const AppNavigator = createAppContainer(AppSwitchNavigator)
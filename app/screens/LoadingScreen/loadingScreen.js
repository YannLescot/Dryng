import React, {Component} from 'react'
import { View, ActivityIndicator, } from 'react-native'
import styles from './styles'
import * as firebase from 'firebase'


class LoadingScreen extends Component {

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user =>
        {
            if(user)
            {
                this.props.navigation.navigate('DashboardScreen')
            }
            else {
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }

    render(){
        return(
            <View style={styles.View1}>
                <ActivityIndicator size="large" />
            </View>
        )
    }
}

export default LoadingScreen;
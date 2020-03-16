import React from 'react'
import { View, StatusBar, Container, Text } from 'react-native'
import styles from './styles'

export default () => (
    <View style={styles.background}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Text style={styles.txtConnexion}>Connecte toi avec</Text>
    </View>
);
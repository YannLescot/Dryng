import React from 'react'
import { StyleSheet } from 'react-native'
import colors from '../../config/colors'

const styles = StyleSheet.create({
    background: {
        backgroundColor: colors.bgColor,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtConnexion: {
        fontFamily: 'poppins',
        fontSize: 24,
        color: colors.orange,
    }
})

export default styles;
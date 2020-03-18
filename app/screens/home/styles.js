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
    buttonContainer: {
        flexDirection: "row",
    },
    ligneSeparatrice: {
        marginTop: 5,
        marginBottom : 5,
        width: 260,
        height: 0,
        borderColor : colors.orange,
        borderWidth: 1,
    },
    txtConnexion: {
        fontSize: 24,
        color: colors.orange,
    },
    buttonConnexion: {
        width: 350,
        height: 50,
        backgroundColor: colors.darkred,
        marginTop: 5,
        marginBottom: 10,
        paddingVertical: 10,
        flexDirection: "row",

    },
    buttonText: {
        color: colors.yellow,
        fontWeight: "600",
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default styles;
import { theme } from './theme'
import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    wrapper: {
        margin: 20
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF'
    },
    btnContainer: {
        alignSelf: 'center',
        borderRadius: 20,
    },
    btnFloatContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 10,
        borderRadius: 20,
        
    },
    btnPrimary: {
        backgroundColor: theme.PRIMARY
    },
    inputContainer: {
        marginVertical: 10
    },
    inputLabel: {
        color: theme.MUTED
    },
    input: {
        borderBottomWidth: 1,
        borderColor: theme.MUTED,
        paddingHorizontal: 5,
        paddingBottom: 5,
        fontSize: 16
    }
})
import { View, StyleSheet, Dimensions } from "react-native"
import Colors from '../../constants/Colors'

export default function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: deviceWidth < 380 ? 18 : 36,
        marginHorizontal: deviceWidth < 380 ? 12 : 24,
        padding: deviceWidth < 380 ? 8 : 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        //android
        elevation: 4, 
        //ios
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25
    },
})
import { Image, View, StyleSheet, Text } from 'react-native'
import Title from '../components/ui/Title'
import Colors from '../constants/Colors'
import PrimaryButton from '../components/ui/PrimaryButton'

export default function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return <View style={styles.rootContainer}>
        <Title>FIM DE JOGO!</Title>
        <View style={styles.imageContainer} >
            <Image 
                style={styles.image}
                source={require('../assets/images/success.png')}
            />
        </View>
        <Text style={styles.summaryText}>
            Seu telefone precisou de <Text style={styles.highlight}>{roundsNumber}</Text> chances para acertar o número <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Começar Novo Jogo</PrimaryButton>
    </View>
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center'
    }, 
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 200,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24
    },
    highlight: {
        fontWeight: 'bold',
        color: Colors.primary500
    }
})
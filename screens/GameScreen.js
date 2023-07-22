import { useState } from 'react'
import { StyleSheet, View } from "react-native"
import Title from "../components/ui/Title"
import NumberContainer from '../components/game/NumberContainer'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } 
    
    return rndNum
 
}

export default function GameScreen({userNumber}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    return (
        <View style={styles.screen}>
            <Title>Palpite do Oponente</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                
                {/* + - */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12
    }
})
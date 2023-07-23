import { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Alert } from "react-native"
import Title from "../components/ui/Title"
import NumberContainer from '../components/game/NumberContainer'
import PrimaryButton from '../components/ui/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max-min)) + min

    if(rndNum === exclude) {
        return generateRandomBetween(min, max, exclude)
    } 
    
    return rndNum
 
}

let minBoundary = 1
let maxBoundary = 100

export default function GameScreen({userNumber, onGameOver}) {
    const initialGuess = generateRandomBetween(1, 100, userNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)

    useEffect(() => {
        if(currentGuess === userNumber) {
            onGameOver()
        }
    }, [currentGuess, userNumber, onGameOver])

    function nextGuessHandler(direction) {
        if(
            (direction === 'lower' && currentGuess < userNumber) || 
            (direction === 'greater' && currentGuess > userNumber)
        ){
            Alert.alert('Não minta!', 'Você sabe que isso é errado...',
                [{ text: 'Desculpe!', style: 'cancel' }]
            )
            return
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess
        } else {
            minBoundary = currentGuess + 1
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
        setCurrentGuess(newRndNumber)
    }

    return (
        <View style={styles.screen}>
            <Title>Palpite do Oponente</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Maior ou menor?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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
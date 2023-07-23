import { 
    TextInput, 
    View, 
    StyleSheet, 
    Alert, 
    useWindowDimensions,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import { useState } from 'react'
import PrimaryButton from '../components/ui/PrimaryButton'
import Colors from '../constants/Colors'
import Title from '../components/ui/Title'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'

export default function StartGameScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('')

    const { width, height } = useWindowDimensions()

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText)
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber)

        if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
           Alert.alert(
            'Número inválido!',
            'O valor deve ser um número entre 1 e 99.',
            [{ text: 'Tentar novamente', style: 'destructive', onPress: resetInputHandler }]
           )
           return
        } 

        onPickNumber(chosenNumber)
    }

    function resetInputHandler() {
        setEnteredNumber('')
    }

    const marginTopDistance = height < 380 ? 30 : 100

    return (
        <ScrollView>
            <KeyboardAvoidingView style={styles.screen} behavior='position'>
                <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
                    <Title>Adivinhe Meu Número</Title>
                    <Card>
                        <InstructionText>Insira um número</InstructionText>
                        <TextInput 
                            style={styles.numberInput}
                            maxLength={2}
                            keyboardType='number-pad'
                            autoCapitalize='nome'
                            autoCorrect={false}
                            onChangeText={numberInputHandler}
                            value={enteredNumber}
                        />
                        <View style={styles.buttonsContainer}>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={resetInputHandler}>Limpar</PrimaryButton>
                            </View>
                            <View style={styles.buttonContainer}>
                                <PrimaryButton onPress={confirmInputHandler}>Confimar</PrimaryButton>
                            </View>
                        </View>
                        
                    </Card>
                </View>
            </KeyboardAvoidingView>
        </ScrollView>
       
    )
}

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        alignItems: 'center'
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
})
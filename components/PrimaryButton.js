import {View, Text, StyleSheet, Pressable } from 'react-native'

export default function PrimaryButton({ children }) {
    function test() {

    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                onPress={test} 
                android_ripple={{color: '#640233'}}
                style={({pressed}) => pressed ? 
                [styles.buttonInnerContainer, styles.pressed ] : styles.buttonInnerContainer 
                }
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable> 
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: '#72063c',
        paddingVertical: 8,
        paddingHorizontal: 16,
        //android
        elevation: 2
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
})
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native';
import { removeItem } from '../utils/AsyncStorage';
import LottieView from 'lottie-react-native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
    const navigation = useNavigation();

    const handleReset = async () => {
        await removeItem('onboarded');
        navigation.push('OnBoarding');
    }
    return (
        <SafeAreaView style={styles.container}>

            <LottieView style={styles.lottie} source={require('../assets/animations/congrat.json')} autoPlay loop />

            <Text style={styles.text}>Congratulation</Text>
            <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    text: {
        fontSize: width * 0.09,
        marginBottom: 20
    },
    resetButton: {
        backgroundColor: '#34d399',
        padding: 10,
        borderRadius: 10
    }
})
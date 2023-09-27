import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';
import { setItem } from '../utils/AsyncStorage';

const { width, height } = Dimensions.get('window');

const OnBoardingScreen = () => {
    const navigation = useNavigation();

    const handleDone = () => {
        navigation.navigate('Home');
        setItem('onboarded', '1');
    }

    const doneButton = ({ ...props }) => {
        return (
            <TouchableOpacity style={styles.doneButton} {...props}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }
    return (
        <SafeAreaView style={styles.container} >
            <Onboarding
                onDone={handleDone}
                onSkip={handleDone}
                //bottomBarHighlight={false}
                DoneButtonComponent={doneButton}
                containerStyles={{ paddingHorizontal: 15 }}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (

                            <LottieView style={styles.lottie} source={require('../assets/animations/congrat.json')} autoPlay loop />

                        ),
                        title: 'Boost ta productivité',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <LottieView style={styles.lottie} source={require('../assets/animations/work.json')} autoPlay loop />
                        ),
                        title: 'Travail sans relache',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <LottieView style={styles.lottie} source={require('../assets/animations/goal.json')} autoPlay loop />
                        ),
                        title: 'Atteint ton objectif',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <LottieView style={styles.lottie} source={require('../assets/animations/money.json')} autoPlay loop />
                        ),
                        title: 'tu atteindras ton objectif',
                        subtitle: 'Done with React Native Onboarding Swiper',
                    },

                ]}
            />
        </SafeAreaView >
    )
}
export default OnBoardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    lottie: {
        width: width * 0.9,
        height: width
    },
    doneButton: {
        padding: 20,
        backgroundColor: 'white',
        borderTopLeftRadius: '100%',
        borderBottomLeftRadius: '100%'
    }
})
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import OnBoardingScreen from '../screens/OnBoardingScreen.js';
import { useEffect, useState } from 'react';
import { getItem } from '../utils/AsyncStorage.js';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
    const [showOnboarding, setShowOnBoarding] = useState(null);

    useEffect(() => {
        checkIfAlReadyOnboarding();
    }, [])
    const checkIfAlReadyOnboarding = async () => {
        let onboarded = await getItem('onboarded');
        if (onboarded == 1) {
            setShowOnBoarding(false);
        } else {
            setShowOnBoarding(true);
        }
    }

    if (showOnboarding == null) {
        return null;
    }

    if (showOnboarding) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='OnBoarding'>
                    <Stack.Screen name="OnBoarding" options={{ headerShown: false }} component={OnBoardingScreen} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    <Stack.Screen name="OnBoarding" options={{ headerShown: false }} component={OnBoardingScreen} />
                    <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }


}

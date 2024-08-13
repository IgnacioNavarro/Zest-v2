import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/constants/Styles";
import { router } from "expo-router";
export const HomeScreen = () => {
    

    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (error) {
            console.log('Error @clearOnboarding: ', error);
        }
    }

    const goToReminder = () => {
        console.log('Go to reminder');
        router.navigate('/two');

    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={clearOnboarding}>
                <Text style={
                    {
                        color: '#fff',
                        fontSize: 20,
                        backgroundColor: '#cccc',
                        padding: 10,
                    }
                }>Onboarding</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={goToReminder}>
                <Text style={
                    {
                        color: '#fff',
                        fontSize: 20,
                        backgroundColor: '#cccc',
                        padding: 10,
                    }
                }>Go to reminder</Text>
            </TouchableOpacity>
        </View>
    )
}

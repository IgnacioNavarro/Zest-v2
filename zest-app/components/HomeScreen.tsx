import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const HomeScreen = () => {
    
    const clearOnboarding = async () => {
        try {
            console.log('clicked to false');
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (error) {
            console.log('Error @clearOnboarding: ', error);
        }
    }
    
    //TODO: fix the styles to fit light / dark theme
    //TODO: Add the text for the onboarding flow
    //TODO: Database connection
    //TODO: Spanish and english translations
    //TODO: Types and linter 


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
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#202020', // create constant for dark mode and light mode
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "@/constants/Styles";

export const HomeScreen = () => {
    
    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (error) {
            console.log('Error @clearOnboarding: ', error);
        }
    }
    
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

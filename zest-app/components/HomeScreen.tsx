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

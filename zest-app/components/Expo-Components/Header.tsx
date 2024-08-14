import { styles } from "@/constants/Styles";
import { View, Text } from "./Themed";
import { Image, TouchableOpacity } from 'react-native';
import { router } from "expo-router";
export const ScreenHeader = ({ title }) => {
    
    const gotoProfile = () => {
        router.push('/three');
    }


    const loggedIn = false;



    const isloggedIn = () => {
        if (loggedIn) {
            return (
                <View style={styles.userImageContainer}>
                <TouchableOpacity onPress={gotoProfile}>
                    <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.userImage} />
                </TouchableOpacity>
                </View>
            );
        }
    }

    
    return (
        <View style={styles.header}>
            <Text style={styles.titleHeader}>{title}</Text>
            {isloggedIn()}
        </View>
    );
}
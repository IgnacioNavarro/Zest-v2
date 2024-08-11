import React from "react";
import { StyleSheet, Image, useWindowDimensions } from "react-native";
import {Text, View} from '@/components/Expo-Components/Themed';
import { styles } from "@/constants/Styles";

export const OnboardingItem =  ({item}:any) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.img} style={[styles.imageOnBoarding, { width, resizeMode: "contain" }]} />
            
            <View style={{ flex: 0.3 }}>
                <Text style={styles.titleOnBoarding}>{item.title}</Text>
                <Text style={styles.descriptionOnBoarding}>{item.description}</Text>
            </View>
        </View>
    );
}

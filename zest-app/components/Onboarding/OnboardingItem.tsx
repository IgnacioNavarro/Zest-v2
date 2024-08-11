import React from "react";
import { StyleSheet, Image, useWindowDimensions } from "react-native";
import {Text, View} from '@/components/Expo-Components/Themed';
import { styles } from "@/constants/Styles";
import { useTranslation } from "react-i18next";

export const OnboardingItem =  ({item}:any) => {
    const { width } = useWindowDimensions();

    const { t } = useTranslation();


    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.img} style={[styles.imageOnBoarding, { width, resizeMode: "contain" }]} />
            
            <View style={{ flex: 0.3 }}>
                <Text style={styles.titleOnBoarding}>{t(`Onboarding.slides.${item.id}.title`)}</Text>
                <Text style={styles.descriptionOnBoarding}>{t(`Onboarding.slides.${item.id}.description`)}</Text>
            </View>
        </View>
    );
}

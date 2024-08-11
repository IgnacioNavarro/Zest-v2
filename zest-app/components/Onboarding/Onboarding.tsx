import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, FlatList, Animated, TouchableOpacity, Appearance } from "react-native";
import {Text, View} from '@/components/Expo-Components/Themed';
import { slides } from "assets/utils/slides";
import { OnboardingItem } from "./OnboardingItem";
import { Paginator } from "./Paginator";
import { router } from "expo-router";
import { styles } from "@/constants/Styles";

export const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const slidesRef = React.useRef(null);

    const viewableItemsChanged =
    React.useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0].index);
    }
    ).current;

    const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollTo = async () => {
            try{
                await AsyncStorage.setItem('@viewedOnboarding', 'true');
                router.replace('/');
            } catch (error) {
                console.log('Error @scrollTo: ', error);
            }
    }


    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
            <FlatList
                data={slides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                 { useNativeDriver: false })}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
            />
            </View>

            {
                currentIndex === slides.length - 1 && (
                    <StartButton scrollTo={scrollTo} />
                )

            }

            <Paginator data={slides} scrollX={scrollX} />
        </View>
    );
}

export const StartButton = ({scrollTo}:any) => {
    
    return (
        <TouchableOpacity onPress={scrollTo}
        style={styles.button}>
            <Text style={styles.startButtonText}
            >Zest Up!</Text>
        </TouchableOpacity>
    )
}
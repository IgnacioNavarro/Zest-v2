import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, StyleSheet, FlatList, Animated, TouchableOpacity } from "react-native";
import { slides } from "assets/utils/slides";
import { OnboardingItem } from "./OnboardingItem";
import { Paginator } from "./Paginator";
import { router } from "expo-router";

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
                console.log('clicked to true');
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
            <Text style={
                { color: '#fafa04', fontSize: 18, fontWeight: 'bold' }
            }>Zest Up!</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#303030',
        borderRadius: 20,
        color: '#fafa04',
        bottom: 100,
        padding: 20
    },
});
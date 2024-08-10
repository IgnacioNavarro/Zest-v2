import React from "react";
import { View, Text, StyleSheet, FlatList, Animated } from "react-native";
import { slides } from "../../assets/utils/slides";
import { OnboardingItem } from "./OnboardingItem";

export const Onboarding = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const slidesRef = React.useRef(null);

    const viewableItemsChanged =
    React.useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index);
    }
    ).current;

    const viewConfig = React.useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
            <FlatList
                data={slides}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator
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
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        color: '#202020',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
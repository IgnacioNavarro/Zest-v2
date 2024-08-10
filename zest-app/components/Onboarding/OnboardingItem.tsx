import React from "react";
import { View, Text, StyleSheet, Image, useWindowDimensions } from "react-native";

export const OnboardingItem =  ({item}:any) => {
    const { width } = useWindowDimensions();

    return (
        <View style={[styles.container, { width }]}>
            <Image source={item.img} style={[styles.image, { width, resizeMode: "contain" }]} />
            
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
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
    image: {
        flex: 0.8,
        justifyContent: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: '#202020',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontWeight: '300',
        color: '#202020',
        textAlign: 'center',
        paddingHorizontal: 64,
    },
});
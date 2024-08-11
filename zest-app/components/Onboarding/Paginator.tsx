import React from "react"
import { StyleSheet, useWindowDimensions, Animated } from "react-native"
import { View, Text } from "@/components/Expo-Components/Themed"
import { styles } from "@/constants/Styles"

export const Paginator = ({data, scrollX}:any) => {
    
    const width = useWindowDimensions().width;
    
    return (
        <View style={styles.paginator }>
            {data.map((_, index) => {
                
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                });

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp',
                });

                return (
                    <Animated.View 
                        key={index.toString()}
                        style={[styles.dot, {width: dotWidth, opacity}]}
                    />
                )
            }
            )}
        </View>
    )
}

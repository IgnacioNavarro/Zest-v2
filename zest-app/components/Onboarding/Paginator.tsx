import React from "react"
import { View, Text, StyleSheet, useWindowDimensions, Animated } from "react-native"

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paginator: {
        flexDirection: 'row',
        height: 64,
    },
    dot: {
        height: 10,
        borderRadius: 5,
        //backgroundColor: '#fafa04',
        backgroundColor: '#202020',
        marginHorizontal: 8,
    },
})
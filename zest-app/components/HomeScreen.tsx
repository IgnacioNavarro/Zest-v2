import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, Text, TouchableOpacity, FlatList, Image, Alert } from "react-native";
import { styles } from "@/constants/Styles";
import { router } from "expo-router";
import { ScreenHeader } from "./Expo-Components/Header";
import ProgressBar from "./Expo-Components/ProgressBar";
export const HomeScreen = () => {
    

    const clearOnboarding = async () => {
        try {
            await AsyncStorage.removeItem('@viewedOnboarding');
        } catch (error) {
            console.log('Error @clearOnboarding: ', error);
        }
    }

    const goToReminder = () => {
        console.log('Go to reminder');
        router.push('/two');

    }

    const habits = [
        {
            id: 1,
            title: 'Walk 10.000 steps',
            streak: 5,
            progress: 4,
            image: 'https://picsum.photos/200',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        {
            id: 2,
            title: 'Read 30 minutes',
            streak: 5,
            progress: 0.65,
            image: 'https://picsum.photos/200',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        },
        {
            id: 3,
            title: 'Meditate 10 minutes',
            streak: 5,
            progress: 0.3,
            image: 'https://picsum.photos/200',
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
        }
    ]

    const renderItem = ({ item }: {item:any}) => {
        return (
        <View>
        <View style={styles.habitItem}>
            <View style={styles.habitHeader}>
                <View style={styles.habitInfo}>
                    <Text style={styles.habitTitle}>{item.title}</Text>
                    <Text style={styles.habitStreak}>Streak: {item.streak}</Text>
                </View>
                <Image source={{ uri: item.image }} style={styles.habitImage} />
            </View>
            <Text style={styles.progressLabel}>Progress</Text>
            <ProgressBar progress={item.progress} /> 
            <View style={styles.daysContainer}>
                    {item.days.map((day:string, index:any) => (
                    <View key={index} style={styles.dayButton}>
                        <Text style={styles.dayText}>{day}</Text>
                    </View>
                    ))}
            </View>
        </View>
        <View style={styles.separator}/>
        </View>
        )
    }

    const addHabit = () => {
        console.log('Add habit');
        //pop up saying coming soon

        Alert.alert('Zest', 'This feature is coming soon');

    }


    return (
        <View style={styles.parentContainer}>
            <ScreenHeader title="Daily Habits" />
            <View style={styles.container}>
                <FlatList
                    data={habits}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    contentContainerStyle={styles.list}
                />
                <TouchableOpacity style={styles.fab} onPress={addHabit}>
                    <Text style={styles.startButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

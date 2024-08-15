import { styles } from '@/constants/Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Text, View} from '@/components/Expo-Components/Themed';
import { router } from 'expo-router';
import { Platform, TextInput, TouchableOpacity } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/components/firebase/firebase';
import { fetchNotification } from '@/components/utils/fetchFromDb';
import { ScreenHeader } from '@/components/Expo-Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';



export default function TabTwoScreen() {

  const goToReminder = async () => {
    console.log('Go to reminder');
    const noti = await fetchNotification('1');
    console.log('Notification: ', noti);
    console.log(router.canGoBack());
    router.back();
  }


  const clearOnboarding = async () => {
    try {
        await AsyncStorage.removeItem('@viewedOnboarding');
    } catch (error) {
        console.log('Error @clearOnboarding: ', error);
    }
  }

  const [objective, setObjective] = useState('');
    
  //set time as a async storage item

  const saveObjective = async () => {
    console.log('Saving objective');
    try {
      await AsyncStorage.setItem('objective', objective);
    } catch (error) {
      console.log('Error @saveObjective: ', error);
    }
  }


  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event:any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    setShowPicker(Platform.OS === 'android');
    setTime(currentTime);
  };

  const showTimepicker = () => {
    setShowPicker(true);
  };

  return (
    <View style={styles.parentContainer}>
    <ScreenHeader title="Notifications" />
    <View style={styles.reminderExplanation}>
        <Text style={styles.reminderTitle}>Set your objective 🎯 </Text>
        <Text style={styles.reminderDescription}>Stay on-track and motivated everyday.</Text>
        <TextInput
        style={styles.input}
        placeholder="Buy a house"
        placeholderTextColor="#808080" // Color gris para el placeholder
        value={objective}
        onChangeText={(objective) => setObjective(objective)}
        />
        <TouchableOpacity style={styles.reminderButton} onPress={saveObjective}>
          <Text style={styles.reminderButtonText}>Save</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.reminderExplanation}>
        <Text style={styles.reminderTitle}>Set the notification time ⏳</Text>
        <Text style={styles.reminderDescription}>Receive the notification when needed.</Text>
        { showPicker && (
          <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={onChange}
        />)}
        <TouchableOpacity style={styles.reminderButton} onPress={showTimepicker}>
          <Text style={styles.reminderButtonText}>Save</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.container}>
      <TouchableOpacity onPress={goToReminder}>
        <Text>Go to reminder</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

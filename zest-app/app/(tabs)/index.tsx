import { styles } from '@/constants/Styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Text, View} from '@/components/Expo-Components/Themed';
import { router } from 'expo-router';
import { Platform, TextInput, TouchableOpacity } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/components/firebase/firebase';
import { fetchNotification } from '@/components/utils/db/fetchFromDb';
import { ScreenHeader } from '@/components/Expo-Components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';
import { usePushNotifications } from '@/components/utils/push/usePushNotifications';



export default function TabTwoScreen() {

  const [objective, setObjective] = useState('');

  const saveObjective = async () => {
    console.log('Saving objective');
    try {
      await AsyncStorage.setItem('objective', objective);
    } catch (error) {
      console.log('Error @saveObjective: ', error);
    }
  }

  const delay = () => new Promise(res => setTimeout(res, 100))
  const [time, setTime] = useState(new Date());

  const saveTime = async () => {
    const hours = time.getHours().toString()+":" + time.getMinutes().toString();
    console.log("Saving time: " + hours);
    try{
      await AsyncStorage.setItem('notificationTime', hours);
    } catch (error) {
      console.log('Error @saveTime: ', error);
    }
  }

  const [showPicker, setShowPicker] = useState(false);
  const [editable, setEditable] = useState(true);

  const onChange =  async (event:any, selectedTime: any) => {
    const currentTime = selectedTime || time;
    //setShowPicker(Platform.OS === 'android');
    setTime(currentTime);
    setEditable(false);
    setShowPicker(false);
    await delay();
    setEditable(true);
  };


  const DateInput = () => {

    const os = Platform.OS;

    if(os === 'ios'){
      return(
        <DateTimePicker
          style={
            {
              width: '100%',
              height: '30%'
            }
          }
          value={time}
          mode="time"
          display="spinner"
          onChange={onChange}
        />
      )
    } else{
      return(
        <View style={{
          width: '100%'
        }}>

        <TextInput
        id='androidInput'
        style={styles.input}
        placeholder="08:00 AM"
        placeholderTextColor="#808080" // Color gris para el placeholder
        value={time.getHours().toString()+":" + time.getMinutes().toString()}
        onPress={ () => 
          {
            setShowPicker(true);
          }}
        editable={editable}
        />

        {showPicker && (
          <DateTimePicker
          value={time}
          mode="time"
          display="spinner"
          onChange={onChange}
          is24Hour={true}
        />)}
        </View>
      )
    }
  }


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
        <Text style={styles.reminderTitle}>Set the notification time ⏳</Text>
        <Text style={styles.reminderDescription}>Receive the notification when needed.</Text>
        {DateInput()}
        <TouchableOpacity style={styles.reminderButton} onPress={saveTime}>
          <Text style={styles.reminderButtonText}>Save</Text>
        </TouchableOpacity>
    </View>
  </View>
  );
}

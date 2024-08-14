import { styles } from '@/constants/Styles';

import {Text, View} from '@/components/Expo-Components/Themed';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/components/firebase/firebase';
import { fetchNotification } from '@/components/utils/fetchFromDb';
import { ScreenHeader } from '@/components/Expo-Components/Header';



export default function TabTwoScreen() {

  const goToReminder = async () => {
    console.log('Go to reminder');
    const noti = await fetchNotification('1');
    console.log('Notification: ', noti);
    console.log(router.canGoBack());
    router.back();
  }
    

  return (
    <View style={styles.parentContainer}>
    <ScreenHeader title="Notifications" />
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Set the push notification</Text>
      <TouchableOpacity onPress={goToReminder}>
        <Text style={styles.title}>Go to reminder</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

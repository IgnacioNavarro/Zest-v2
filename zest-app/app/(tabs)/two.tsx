import { styles } from '@/constants/Styles';

import {Text, View} from '@/components/Expo-Components/Themed';
import { router } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/components/firebase/firebase';



export default function TabTwoScreen() {

  const goToReminder = () => {
    console.log('Go to reminder');
    fetchData();
    router.back();
  }

  const fetchData = async () => {
    const docRef = 
    doc(db, 'Notifications', '1');
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data());
    } else {
      console.log('No such document!');
    }
  }
    

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Set the push notification</Text>
      <TouchableOpacity onPress={goToReminder}>
        <Text style={styles.title}>Go to reminder</Text>
      </TouchableOpacity>
    </View>
  );
}

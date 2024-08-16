import { styles } from '@/constants/Styles';
import {Text, View} from '@/components/Expo-Components/Themed';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScreenHeader } from '@/components/Expo-Components/Header';
import { usePushNotifications } from '@/components/utils/push/usePushNotifications';
export default function TabThreeScreen() {



  //TODO: firebase auth

  //if user is logged in, show profile screen, else render login screen inside the profile screen.
  //      <FontAwesome6 name="gear" size={24} color="black" />
  /* 
        <Text style={styles.title}>Log in with google</Text>
        <Text style={styles.title}>Log in with mail</Text>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.title}>Profile screen</Text>
        <Text style={styles.title}>Settings screen (logout, change Language)</Text>

        */



  const {expoPushToken, notification} = usePushNotifications();

  const data = JSON.stringify(notification, undefined, 2);


  //todo: fetch form db and build notification
  //todo: build ios EAS 

  return (
    <View style={styles.parentContainer}>
    <ScreenHeader title="Profile" />
    <View style={styles.container}>

      <Text style={styles.descriptionOnBoarding}>Coming soon...</Text>
      <Text>Token: {expoPushToken?.data ?? ""}</Text>
      <Text>Notification: {data}</Text>
    </View>
  </View>
  );
}

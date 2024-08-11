import { styles } from '@/constants/Styles';

import {Text, View} from '@/components/Expo-Components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Set the push notification</Text>
    </View>
  );
}

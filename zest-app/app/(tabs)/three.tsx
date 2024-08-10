import { StyleSheet } from 'react-native';

import {Text, View} from '@/components/Expo-Components/Themed';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 3</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Log in with google</Text>
        <Text style={styles.title}>Log in with mail</Text>
        <Text style={styles.title}>Create account</Text>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.title}>Log out button in a corner</Text>
        <Text style={styles.title}>Profile screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
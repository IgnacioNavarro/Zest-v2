import { StyleSheet } from 'react-native';
import {Text, View} from '@/components/Expo-Components/Themed';
import { HomeScreen } from '@/components/HomeScreen';

export default function TabOneScreen() {
  return HomeScreen();
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

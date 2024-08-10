import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Onboarding } from './components/Onboarding/Onboarding';


export default function App() {
  return (
    <View style={styles.container}>
      <Onboarding />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020', // create constant for dark mode and light mode
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

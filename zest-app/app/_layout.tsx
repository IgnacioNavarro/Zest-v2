import { SplashScreen, Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useFonts } from 'expo-font';
import { FontAwesome } from '@expo/vector-icons';

export {
    // Catch any errors thrown by the Layout component.
    ErrorBoundary,
  } from 'expo-router';
  
  export const unstable_settings = {
    // Ensure that reloading on `/modal` keeps a back button present.
    initialRouteName: '(tabs)/index',
  };
  
  // Prevent the splash screen from auto-hiding before asset loading is complete.
  SplashScreen.preventAutoHideAsync();



export default function RootLayout() {

    const [loaded, error] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
        ...FontAwesome.font,
      });
    
      // Expo Router uses Error Boundaries to catch errors in the navigation tree.
      useEffect(() => {
        if (error) throw error;
      }, [error]);
    
      useEffect(() => {
        if (loaded) {
          SplashScreen.hideAsync();
        }
      }, [loaded]);
    
      if (!loaded) {
        return null;
      }

      
      //return welcome screen if the user has not seen the one time screen or the tabs screen if they have
      return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ title: 'Modal' }} />
        <Stack.Screen name="Onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
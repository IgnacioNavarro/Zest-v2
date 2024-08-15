import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { HomeScreen } from 'components/HomeScreen';
import { Onboarding } from 'components/Onboarding/Onboarding';
import { Link, Navigator, router, SplashScreen, Stack } from 'expo-router';
import { styles } from 'constants/Styles';

const Loading = () => {
  return (
    //TODO: Rayo palpitando como si estuviese cargando
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#fafa04" />
    </View>
  )
}

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [loading, setLoading] = useState(true);
  const [viewedOnboarding, setViewedOnboarding] = useState(false);
  
  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem('@viewedOnboarding');
      if (value !== null) {
        setViewedOnboarding(true);
        router.replace('/(tabs)');
      }
    } catch (error) {
      console.log('Error @checkOnboarding: ', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={styles.container}>
      
      {loading ? <Loading /> : viewedOnboarding ? 
      <HomeScreen />
      : <Onboarding />}
      <StatusBar style="auto" />
    </View>
  );
}


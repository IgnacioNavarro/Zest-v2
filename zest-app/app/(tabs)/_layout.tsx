import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';
import { useClientOnlyValue } from 'components/Expo-Components/useClientOnlyValue';
import Colors from 'constants/Colors';
import { useTranslation } from "react-i18next";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { ScreenHeader } from '@/components/Expo-Components/Header';
// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const { t } = useTranslation();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, false)
        //TODO: Do i want a header????
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Reminder',
          headerShown: useClientOnlyValue(false, false),
          tabBarIcon: ({ color }) => <FontAwesome6 name="bell" size={24} solid color={color} style={{ marginBottom: -3 }}  />,
          headerRight: () => (
            <Link replace href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />

      <Tabs.Screen
        name="two"
        options={{
          title: t('Habits.title'),
          tabBarIcon: ({ color }) => <FontAwesome6 name="list-check" size={24} color={color} style={{ marginBottom: -3 }} />,
}}
      />

      <Tabs.Screen
        name="three"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome6 name="user" solid size={24} color={color} style={{ marginBottom: -3 }}  />,
        }}
      />
    </Tabs>
  );
}
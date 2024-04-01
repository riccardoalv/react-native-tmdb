import React from "react";
import { Tabs } from "expo-router";
import { HomeIcon, SearchIcon, BookmarkIcon } from "../../assets/icons";
import { COLORS } from "../../constants";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.blue,
        headerShadowVisible: false,
        headerTintColor: COLORS.titleText,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: COLORS.background,
          borderBottomWidth: 0,
        },
        tabBarStyle: {
          height: 80,
          borderTopColor: COLORS.blue,
          backgroundColor: COLORS.background,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "bold",
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="watchList"
        options={{
          title: "Watch list",
          tabBarIcon: ({ color }) => <BookmarkIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

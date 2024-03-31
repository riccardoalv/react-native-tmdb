import React from "react";
import { Octicons } from "@expo/vector-icons";
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
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
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

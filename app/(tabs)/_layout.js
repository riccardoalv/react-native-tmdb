import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { HomeIcon, SearchIcon, BookmarkIcon } from "../../assets/icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#0296E5" }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
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

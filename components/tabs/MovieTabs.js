import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import styles from "./MovieTabs.style";

function TabButton({ name, activeTab, onPress }) {
  return (
    <TouchableOpacity style={styles.tab(name, activeTab)} onPress={onPress}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const MovieTabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onPress={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={styles.container}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default MovieTabs;

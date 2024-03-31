import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity onPress={onHandleSearchType}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

const DetailTabs = ({ tabs, activeTab, setActiveTab }) => {
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
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: 20 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default DetailTabs;

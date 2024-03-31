import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";
import { COLORS } from "../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={{
        borderBottomWidth: 3,
        borderBottomColor: name === activeTab ? "#3A3F47" : COLORS.background,
        marginBottom: 30,
      }}
      onPress={onHandleSearchType}
    >
      <Text
        style={{
          fontSize: 20,
          color: COLORS.text,
          fontFamily: "Poppins",
        }}
      >
        {name}
      </Text>
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
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{
          columnGap: 40,
          marginTop: 50,
          marginHorizontal: 40,
        }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default MovieTabs;

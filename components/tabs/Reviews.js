import React, { useState } from "react";
import {
  TouchableOpacity,
  FlatList,
  Text,
  ActivityIndicator,
  View,
  Image,
} from "react-native";
import styles from "./Reviews.style";
import { COLORS } from "../../constants";
import fetchReviews from "../../hook/fetchReviews";

const Reviews = ({ id }) => {
  const { data, isLoading, error } = fetchReviews(id);

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <View
              style={{
                margin: 15,
                padding: 20,
                borderRadius: 24,
                borderColor: COLORS.blue,
                borderWidth: 1,
              }}
            >
              <Image
                width={48}
                height={48}
                style={{
                  borderRadius: 24,
                  margin: 10,
                }}
                source={{ uri: item.author_details.avatar_path }}
              />
              <Text
                style={{
                  fontSize: 20,
                  color: "white",
                  textAlign: "left",
                  flexWrap: "wrap",
                }}
              >
                {item.author}
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  color: "white",
                  textAlign: "left",
                }}
              >
                {item.content}
              </Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Reviews;

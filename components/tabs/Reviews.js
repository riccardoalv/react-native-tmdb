import React, { useState } from "react";
import { FlatList, Text, ActivityIndicator, View, Image } from "react-native";
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
      ) : !data.total_results ? (
        <Text
          style={{
            textAlign: "center",
            color: COLORS.text,
            fontSize: 30,
            fontFamily: "Poppins",
          }}
        >
          No Reviews found
        </Text>
      ) : (
        <FlatList
          data={data.results}
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

import { View, TouchableOpacity, ScrollView } from "react-native";
import { COLORS, SIZES } from "../../constants";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import searchMovie from "../../hook/searchMovie";
import { useState } from "react";
import { SearchBar, ListMovies } from "../../components";

export default function Tab() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { data, isLoading, error } = searchMovie(params.term);

  const [searchTerm, setsearchTerm] = useState("");

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "Search",
          headerShadowVisible: false,
          headerTintColor: COLORS.titleText,
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "MontSerrat",
            fontWeight: "bold",
          },
          headerStyle: {
            backgroundColor: COLORS.background,
            borderBottomWidth: 0,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <FontAwesome6
                name="angle-left"
                size={24}
                color={COLORS.titleText}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        <ListMovies data={data} isLoading={isLoading} error={error} />
      </ScrollView>
    </View>
  );
}

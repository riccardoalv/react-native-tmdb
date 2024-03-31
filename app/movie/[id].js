import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { COLORS } from "../../constants";
import { BookmarkIcon, BookmarkIconFilled } from "../../assets/icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MovieCard } from "../../components";
import fetchMovie from "../../hook/fetchMovie";
import DetailTabs from "../../components/DetailTab";
import { useState } from "react";

export default function Tab() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { data, isLoading, error } = fetchMovie(params.id);
  const tabs = ["About Movie", "Reviews", "Cast"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const DisplayTabContent = () => {
    switch (activeTab) {
      case "About Movie":
        return <Text>{data.overview}</Text>;

      case "Reviews":
        return <Text>reviews</Text>;

      case "Cast":
        return <Text>cast</Text>;

      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
        margin: 0,
      }}
    >
      <Stack.Screen
        options={{
          headerTitle: "Detail",
          headerShadowVisible: false,
          headerTintColor: COLORS.titleText,
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: COLORS.background,
            borderBottomWidth: 0,
          },
          headerRight: () => <BookmarkIcon color={COLORS.titleText} />,
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
      {isLoading ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <View style={{}}>
          <Image
            src={data.backdrop_path}
            style={{
              width: "100%",
              height: 300,
            }}
          />
          <MovieCard uri={data.poster_path} scale={1.2} />
          <Text style={{ color: COLORS.grey }}>{data.original_title}</Text>
          <Feather name="calendar" size={24} color={COLORS.grey} />
          <Text style={{ color: COLORS.grey }}>
            {data.release_date.slice(0, 4)}
          </Text>
          <Feather name="clock" size={24} color={COLORS.grey} />
          <Ionicons name="ticket-outline" size={24} color={COLORS.grey} />
          <Text style={{ color: COLORS.grey }}>{data.genres[0].name}</Text>
          <DetailTabs
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <DisplayTabContent />
        </View>
      )}
    </View>
  );
}

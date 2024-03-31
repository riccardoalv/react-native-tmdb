import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from "react-native";
import { COLORS, SIZES } from "../../constants";
import { BookmarkIcon, BookmarkIconFilled } from "../../assets/icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { FontAwesome6 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MovieCard } from "../../components";
import fetchMovie from "../../hook/fetchMovie";
import { MovieTabs } from "../../components";
import { useState } from "react";
import styles from "../../style/detail/detail.style";

export default function Tab() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { data, isLoading, error } = fetchMovie(params.id);
  const tabs = ["About Movie", "Reviews", "Cast"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const DisplayTabContent = () => {
    switch (activeTab) {
      case "About Movie":
        return (
          <Text
            style={{
              fontSize: 18,
              textAlign: "left",
              color: COLORS.text,
              fontWeight: "normal",
              fontFamily: "Poppins",
              marginHorizontal: 30,
            }}
          >
            {data.overview}
          </Text>
        );

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
          headerTitleStyle: styles.headerTitle,
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
        <View>
          <Image src={data.backdrop_path} style={styles.posterImage} />
          <View
            style={{
              marginTop:
                SIZES.posterImage.height -
                (SIZES.cards.height / 2) * SIZES.detailScaleFactor,
            }}
          >
            <View style={styles.cardAndTitle}>
              <MovieCard
                uri={data.poster_path}
                scale={SIZES.detailScaleFactor}
              />
              <Text style={styles.title}> {data.original_title} </Text>
            </View>
            <View style={styles.movieInfo.container}>
              <Feather
                style={styles.movieInfo.icon}
                name="calendar"
                size={24}
                color={COLORS.grey}
              />
              <Text style={styles.movieInfo.text}>
                {data.release_date.slice(0, 4)}
              </Text>
              <Feather
                style={styles.movieInfo.icon}
                name="clock"
                size={24}
                color={COLORS.grey}
              />
              <Text style={styles.movieInfo.text}>{data.runtime} Minutes</Text>
              <Ionicons
                style={styles.movieInfo.icon}
                name="ticket-outline"
                size={24}
                color={COLORS.grey}
              />
              <Text style={[styles.movieInfo.text, { borderRightWidth: 0 }]}>
                {data.genres[0].name}
              </Text>
            </View>
            <View>
              <MovieTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
              <DisplayTabContent />
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

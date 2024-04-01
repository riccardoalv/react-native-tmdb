import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useEffect, useState } from "react";
import { COLORS, SIZES } from "../../constants";
import { MovieCard, MovieTabs } from "../../components";
import { useRouter } from "expo-router";
import trendingMovies from "../../hook/trendingMovies";
import { GridMovies } from "../../components";
import nowPlayingMovies from "../../hook/nowPlayingMovies";
import popularMovies from "../../hook/popularMovies";
import topRatedMovies from "../../hook/topRatedMovies";
import upcomingMovies from "../../hook/upcomingMovies";

export default function Tab() {
  const router = useRouter();

  const { data, isLoading, error } = trendingMovies();

  const tabs = ["Now playing", "Upcoming", "Top rated", "Popular"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  function DisplayTabContent() {
    switch (activeTab) {
      case tabs[0]:
        return (
          <GridMovies
            data={nowPlayingMovies().data}
            isLoading={nowPlayingMovies().isLoading}
            error={nowPlayingMovies().error}
          />
        );
      case tabs[1]:
        return (
          <GridMovies
            data={upcomingMovies().data}
            isLoading={upcomingMovies().isLoading}
            error={upcomingMovies().error}
          />
        );
      case tabs[2]:
        return (
          <GridMovies
            data={topRatedMovies().data}
            isLoading={topRatedMovies().isLoading}
            error={topRatedMovies().error}
          />
        );
      case tabs[3]:
        return (
          <GridMovies
            data={popularMovies().data}
            isLoading={popularMovies().isLoading}
            error={popularMovies().error}
          />
        );

      default:
        return null;
    }
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      <View
        style={{
          margin: 30,
          marginTop: 50,
        }}
      >
        <Text
          style={{
            color: COLORS.text,
            fontSize: 22,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          Watch do you want to watch?
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity
                  onPress={() => router.push(`/movie/${item.id}`)}
                >
                  <MovieCard uri={item.poster_path} scale={1.8} margin={0} />
                </TouchableOpacity>
                <Text
                  style={{
                    color: COLORS.background,
                    fontFamily: "MontSerrat",
                    fontWeight: "bold",
                    fontSize: 100,
                    position: "absolute",
                    textShadowColor: COLORS.blue,
                    textShadowOffset: { width: -2, height: 0 },
                    textShadowRadius: 20,
                    marginTop: SIZES.cards.height - 20,
                  }}
                >
                  {data.indexOf(item) + 1}
                </Text>
              </>
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
          />
        )}
      </View>
      <MovieTabs
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <DisplayTabContent />
    </ScrollView>
  );
}

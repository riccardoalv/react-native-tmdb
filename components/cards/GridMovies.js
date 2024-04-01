import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MovieCard from "./MovieCard";
import { useRouter } from "expo-router";

export default function GridMovies({ data, isLoading, error }) {
  const router = useRouter();

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          scrollEnabled={false}
          numColumns={3}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                router.push(`/movie/${item.id}`);
              }}
              style={{
                marginTop: 20,
              }}
            >
              <MovieCard uri={item.poster_path} scale={1.2} margin={"2%"} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            justifyContent: "center",
          }}
        />
      )}
    </View>
  );
}

import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import MovieCard from "../MovieCard";
import { useRouter } from "expo-router";
import { COLORS } from "../../../constants";
import styles from "./ListMovies.style";

function DisplayCards({ item }) {
  const router = useRouter();
  console.log(item);
  return (
    <TouchableOpacity
      onPress={() => {
        router.push(`/movie/${item.id}`);
      }}
      style={styles.button}
    >
      <MovieCard uri={item.poster_path} scale={1.2} margin={"2%"} />
      <View style={styles.info}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View style={styles.iconAndText}>
          <Feather
            style={styles.icon}
            name="calendar"
            size={24}
            color={COLORS.grey}
          />
          <Text style={styles.text}>{item.release_date.slice(0, 4)}</Text>
        </View>
        <View style={styles.iconAndText}>
          <Ionicons
            style={styles.icon}
            name="language-outline"
            size={24}
            color={COLORS.grey}
          />
          <Text style={styles.text}>{item.original_language}</Text>
        </View>
        <View style={styles.iconAndText}>
          <Feather
            style={styles.icon}
            name="star"
            size={24}
            color={COLORS.golden}
          />
          <Text style={styles.text}>{item.vote_average.toFixed(1)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function ListMovies({ data, isLoading, error }) {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({ item }) => <DisplayCards item={item} />}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{
            marginTop: 30,
          }}
        />
      )}
    </View>
  );
}

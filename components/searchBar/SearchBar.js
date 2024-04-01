import { TextInput, TouchableOpacity, View } from "react-native";
import { COLORS } from "../../constants";
import styles from "./SearchBar.style";
import { SearchIcon } from "../../assets/icons";
import { useRouter } from "expo-router";

export default function SearchBar({ searchTerm, setsearchTerm }) {
  const router = useRouter();
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        value={searchTerm}
        onChangeText={(text) => setsearchTerm(text)}
        placeholder="Search"
        placeholderTextColor={COLORS.search.text}
      />

      <TouchableOpacity
        hitSlop={50}
        style={styles.searchBtn}
        onPress={() => {
          if (searchTerm != "") {
            router.push(`/search/${searchTerm}`);
          }
        }}
      >
        <SearchIcon color={COLORS.search.text} />
      </TouchableOpacity>
    </View>
  );
}

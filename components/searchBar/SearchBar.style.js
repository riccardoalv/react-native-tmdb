import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: COLORS.search.background,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 15,
  },
  searchInput: {
    width: "70%",
    fontSize: 15,
    fontFamily: "Poppins",
    color: "white",
    marginLeft: 20,
  },
  searchBtn: {
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
});

export default styles;

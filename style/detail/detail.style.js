import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: "MontSerrat",
    fontWeight: "bold",
  },
  posterImage: {
    width: "100%",
    height: SIZES.posterImage.height,
    position: "absolute",
  },
  cardAndTitle: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginHorizontal: 50,
    marginBottom: 25,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    marginHorizontal: 20,
    fontFamily: "PoppinsSemiBold",
    textAlign: "center",
    color: COLORS.text,
    fontSize: 24,
  },
  movieInfo: {
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      margin: 5,
      marginLeft: 20,
    },
    text: {
      paddingRight: 20,
      color: COLORS.grey,
      borderRightColor: COLORS.grey,
      borderRightWidth: 1,
      fontFamily: "Poppins",
    },
  },
});

export default styles;

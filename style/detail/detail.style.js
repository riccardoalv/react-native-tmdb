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
    marginLeft: 50,
    marginBottom: 25,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    marginLeft: 15,
    fontFamily: "PoppinsSemiBold",
    textAlign: "left",
    color: COLORS.text,
    fontSize: 24,
  },
  rating: {
    container: {
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      marginLeft: "70%",
      marginTop: SIZES.cards.height / 2 - 40,
      flexDirection: "row",
      backgroundColor: "rgba(36, 42, 50, 0.8)",
      padding: 5,
      borderRadius: 20,
    },
    text: {
      marginLeft: 5,
      color: COLORS.golden,
      fontSize: 16,
      fontWeight: "bold",
    },
  },
  movieInfo: {
    container: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      margin: 5,
      marginLeft: 10,
    },
    text: {
      paddingRight: 10,
      color: COLORS.grey,
      borderRightColor: COLORS.grey,
      borderRightWidth: 1,
      fontFamily: "Poppins",
    },
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
  },
  info: {
    flexDirection: "column",
  },
  titleContainer: {
    flexDirection: "row",
    width: 200,
    padding: 10,
  },
  title: {
    flex: 1,
    flexWrap: "wrap",
    color: COLORS.text,
    fontSize: 20,
    justifyContent: "center",
  },
  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "left",
    color: COLORS.text,
  },
  icon: { margin: 5 },
});

export default styles;

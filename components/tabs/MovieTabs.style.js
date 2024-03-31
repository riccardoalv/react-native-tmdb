import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  container: {
    columnGap: 20,
    marginTop: 50,
    paddingHorizontal: 30,
  },
  tab: (name, activeTab) => ({
    borderBottomWidth: 3,
    borderBottomColor:
      name === activeTab ? COLORS.tabs.activeTab : COLORS.background,
    marginBottom: 30,
  }),
  text: {
    fontSize: 20,
    color: COLORS.text,
    fontFamily: "Poppins",
  },
});

export default styles;

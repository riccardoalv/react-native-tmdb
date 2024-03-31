import { View, Text } from "react-native";
import { COLORS } from "../../constants";

export default function Tab() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
      }}
    >
      <Text></Text>
    </View>
  );
}

import { Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function MovieCard({ uri, scale }) {
  const router = useRouter();
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={{
        height: 146 * scale,
        width: 100 * scale,
        borderRadius: 16 * scale,
      }}
    />
  );
}

import { Image } from "react-native";

export default function MovieCard({ uri, scale }) {
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

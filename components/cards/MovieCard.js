import { Image } from "react-native";
import { SIZES } from "../../constants";

export default function MovieCard({ uri, scale }) {
  return (
    <Image
      source={{
        uri: uri,
      }}
      style={{
        height: SIZES.cards.height * scale,
        width: SIZES.cards.width * scale,
        borderRadius: SIZES.cards.borderRadius * scale,
      }}
    />
  );
}

import * as React from "react";
import Svg, { Path } from "react-native-svg";

const BookmarkIconFilled = ({ color }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={22} height={24} fill={color}>
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.696 18.632 5.324 21.88c-.43.246-.958.072-1.194-.394v0a1.13 1.13 0 0 1-.108-.466V6.622c0-2.746 1.7-3.844 4.146-3.844h5.745c2.372 0 4.146 1.025 4.146 3.661v14.582c0 .26-.094.508-.26.692a.847.847 0 0 1-.627.287.904.904 0 0 1-.431-.119l-5.406-3.25a.616.616 0 0 0-.639 0Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default BookmarkIconFilled;

import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

const SearchIcon = ({ color }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} fill="none">
    <Ellipse
      cx={9.789}
      cy={10.767}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      rx={8.142}
      ry={8.989}
    />
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.451 17.485 18.643 21"
    />
  </Svg>
);
export default SearchIcon;

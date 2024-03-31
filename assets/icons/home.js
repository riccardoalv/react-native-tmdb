import * as React from "react";
import Svg, { Path } from "react-native-svg";

const HomeIcon = ({ color }) => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={22} fill="none">
    <Path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.525 21H4.606c-1.737 0-3.146-1.54-3.146-3.438V8.847c.007-.747.328-1.45.872-1.904l5.934-5.258a2.67 2.67 0 0 1 3.573 0l5.96 5.248c.541.456.862 1.158.871 1.905v8.724c0 1.899-1.408 3.438-3.145 3.438Z"
    />
  </Svg>
);
export default HomeIcon;

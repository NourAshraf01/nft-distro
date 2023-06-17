import * as React from "react";
const SvgSun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="inherit"
    {...props}
  >
    <path
      fill="inherit"
      d="M12.99 18.828a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm-1-17h2v3h-2v-3Zm0 19h2v3h-2v-3ZM4.505 5.758 5.92 4.342 8.04 6.464 6.626 7.878l-2.12-2.12ZM17.94 19.191l1.414-1.414 2.121 2.121-1.414 1.414-2.12-2.12Zm2.121-14.85 1.414 1.415-2.12 2.121-1.415-1.414 2.121-2.12v-.002ZM6.626 17.778l1.414 1.414-2.12 2.121L4.504 19.9l2.121-2.12Zm17.364-5.95v2h-3v-2h3Zm-19 0v2h-3v-2h3Z"
    />
  </svg>
);
export default SvgSun;

import * as React from "react";
const SvgEtheruem = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={16}
    fill="none"
    {...props}
  >
    <g clipPath="url(#etheruem_svg__a)">
      <path
        fill="#000"
        d="m9.544 7.935-4.636 2.753L.27 7.935 4.908.197l4.636 7.738Zm-4.636 3.637L.27 8.819l4.638 6.568L9.547 8.82l-4.639 2.753Z"
      />
    </g>
    <defs>
      <clipPath id="etheruem_svg__a">
        <path fill="currentColor" d="M.025.197H9.79v15.19H.025z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEtheruem;

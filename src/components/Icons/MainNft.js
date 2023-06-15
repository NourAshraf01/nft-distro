import * as React from "react";
const SvgMainNft = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={511}
    height={534}
    fill="none"
    {...props}
  >
    <rect
      width={509.751}
      height={533.469}
      x={0.277}
      y={0.273}
      fill="url(#main_nft_svg__a)"
      rx={26}
    />
    <defs>
      <pattern
        id="main_nft_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#main_nft_svg__b"
          transform="matrix(.00064 0 0 .00061 -.117 -.163)"
        />
      </pattern>
      <image
        id="main_nft_svg__b"
        width={1920}
        height={1920}
      />
    </defs>
  </svg>
);
export default SvgMainNft;
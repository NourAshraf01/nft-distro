import * as React from "react";
const Svg3DBallSmall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={128}
    height={136}
    fill="none"
    {...props}
  >
    <g filter="url(#3d_ball_small_svg__a)">
      <path
        fill="url(#3d_ball_small_svg__b)"
        d="M18.381 0h83.293v87.587H18.381z"
        shapeRendering="crispEdges"
      />
    </g>
    <defs>
      <pattern
        id="3d_ball_small_svg__b"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#3d_ball_small_svg__c"
          transform="scale(.00049 .00046)"
        />
      </pattern>
      <filter
        id="3d_ball_small_svg__a"
        width={127.293}
        height={135.587}
        x={0.381}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx={4} dy={26} />
        <feGaussianBlur stdDeviation={11} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_14_255" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_14_255"
          result="shape"
        />
      </filter>
      <image
        id="3d_ball_small_svg__c"
        width={2056}
        height={2162}
      />
    </defs>
  </svg>
);
export default Svg3DBallSmall;
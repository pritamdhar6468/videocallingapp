import React from "react";

function FrontCameraPermissionDenied() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="56"
      height="56"
      fill="none"
      viewBox="0 0 56 56"
    >
      <g filter="url(#filter0_d_20_1271)">
        <rect width="48" height="48" x="4" y="4" fill="#FF5D5D" rx="24"></rect>
      </g>
      <g filter="url(#filter1_d_20_1271)">
        <circle cx="44" cy="12" r="8" fill="#FF8A00"></circle>
      </g>
      <path
        fill="#fff"
        d="M28 22h-4c-1.104 0-2 .896-2 2v6c0 1.104.896 2 2 2h4c1.104 0 2-.896 2-2v-6c0-1.104-.896-2-2-2zm6 6v2h4v-2h-4zm-7.993-9h3.993v1h-3.993v-1z"
      ></path>
      <path
        fill="#fff"
        d="M37.501 32.909c.155-.097.282-.23.37-.388.087-.157.132-.334.13-.513v-8a1.176 1.176 0 00-.146-.504 1.216 1.216 0 00-.354-.396.904.904 0 00-1 0l-3.5 1.8a2.967 2.967 0 00-.907-2.028A3.15 3.15 0 0030 22h-3.7l11 11.006c-.001-.097.099-.097.2-.097z"
      ></path>
      <defs>
        <filter
          id="filter0_d_20_1271"
          width="56"
          height="56"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="2"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_20_1271"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_20_1271"
            result="shape"
          ></feBlend>
        </filter>
        <filter
          id="filter1_d_20_1271"
          width="20"
          height="20"
          x="34"
          y="4"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="2"></feOffset>
          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_20_1271"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_20_1271"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default FrontCameraPermissionDenied;

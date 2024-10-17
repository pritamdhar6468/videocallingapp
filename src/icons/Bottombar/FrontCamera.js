import React from "react";

function FrontCameraIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <mask
        id="mask0_25_170"
        style={{ maskType: "alpha" }}
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#D9D9D9" d="M0 0H24V24H0z"></path>
      </mask>
      <g fill="#050A0E" mask="url(#mask0_25_170)">
        <path
          d="M12 2C9.243 2 7 4.243 7 7v1H5c-1.104 0-2 .896-2 2v6c0 1.104.896 2 2 2h2v1c0 2.757 2.243 5 5 5s5-2.243 5-5v-1h2c1.104 0 2-.896 2-2v-6c0-1.104-.896-2-2-2h-2V7c0-2.757-2.243-5-5-5zM12 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 0-2 2-2zm4 14c0 1.104-.896 2-2 2s-2-.896-2-2v-1h4v1zm2-3h-4v-4h4v4z"
        ></path>
      </g>
    </svg>
  );
}

export default FrontCameraIcon;

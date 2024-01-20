import * as React from "react";
const DownArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={80}
    height={80}
    fill="none"
    style={{ transform: "rotate(180deg)", scale: 0.75 }}
  >
    <path
      stroke="hsl(219, 13%, 69%)"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M40.343 29H19.657c-2.088 0-3.133-2.524-1.657-4l9.879-9.88a3 3 0 0 1 4.242 0l9.88 9.88c1.475 1.476.43 4-1.658 4ZM30 29v10c0 15.464 12.536 28 28 28h8"
    />
  </svg>
);
export default DownArrow;

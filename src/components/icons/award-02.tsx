import type { SVGProps } from "react";
import * as React from "react";

const SvgAward02 = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#award-02_svg__a)">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M7 15.09V22l4.703-1.881c.11-.044.165-.066.221-.075a.5.5 0 0 1 .152 0c.056.009.111.03.221.075L17 22v-6.91m2.5-5.59a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0"
      />
    </g>
    <defs>
      <clipPath id="award-02_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAward02;

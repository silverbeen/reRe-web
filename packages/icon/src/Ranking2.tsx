import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';

const Ranking2Icon = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
    <path
      d="M32.94 25.8C34.3 24.24 35.38 22.58 36.18 20.82L32.94 25.8ZM32.94 25.8C31.62 27.32 29.74 29.26 27.3 31.62L32.94 25.8ZM18.8091 26.4764L18.8091 26.4765L18.8122 26.4737L19.8887 25.5168C19.8893 25.5163 19.8899 25.5158 19.8904 25.5153C21.7706 23.8751 23.157 22.6295 24.0452 21.7817L24.0453 21.7818L24.0536 21.7736C24.9639 20.8632 25.66 19.9193 26.1292 18.9397C26.6476 17.9012 26.9 16.7239 26.9 15.42C26.9 13.4809 26.1808 11.896 24.7395 10.7154C23.3446 9.53985 21.4789 8.98 19.2 8.98C16.7049 8.98 14.6543 9.66861 13.1021 11.0914C11.6477 12.4247 10.8184 14.2367 10.5814 16.48H0.537029C0.793684 13.4166 1.67738 10.7177 3.17953 8.37204C4.80982 5.88863 6.98152 3.96826 9.70361 2.60721L9.70362 2.60724L9.70867 2.60464C12.4292 1.20554 15.529 0.5 19.02 0.5C22.8077 0.5 26.0344 1.11171 28.7151 2.31609L28.7151 2.31612L28.7206 2.31854C31.3997 3.48336 33.4169 5.16149 34.7973 7.347L34.7972 7.34705L34.8028 7.35563C36.2212 9.5023 36.94 12.0632 36.94 15.06C36.94 17.0705 36.5345 18.9163 35.7288 20.6046L35.7287 20.6046L35.7248 20.6131C34.9462 22.326 33.8935 23.9454 32.5631 25.4714L32.5625 25.4722C31.2564 26.9762 29.3884 28.9044 26.9532 31.2598C24.1745 33.9193 20.8949 36.5833 17.1118 39.2514L15.8235 40.16H17.4H37.48V48.64H1.16V41.0452C6.94603 36.5603 12.8291 31.704 18.8091 26.4764Z"
      fill="black"
      stroke="white"
    />
  </svg>
);

const ForwardRef = forwardRef(Ranking2Icon);
export default ForwardRef;

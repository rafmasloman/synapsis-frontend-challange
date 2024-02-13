import React from 'react';

interface IIconDataTypes {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const GonewsIcon = ({ className, size }: IIconDataTypes) => {
  return (
    <svg
      width="60"
      height="40"
      viewBox="0 0 195 179"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.603197 79.1182C2.35539 64.1148 7.87645 49.7989 16.6521 37.5041C25.4277 25.2093 37.1724 15.3357 50.7921 8.8029C64.4118 2.27012 79.4633 -0.709245 94.5447 0.142342C109.626 0.993928 124.247 5.64876 137.044 13.6732L120.916 39.3951C112.46 34.0926 102.799 31.0168 92.8331 30.4541C82.8676 29.8914 72.9218 31.8601 63.9222 36.1768C54.9225 40.4936 47.1619 47.0179 41.3631 55.1421C35.5643 63.2662 31.9161 72.7259 30.7583 82.6399L0.603197 79.1182Z"
        fill="#FFC300"
      />
      <path
        d="M90.1473 86.4205C107.988 86.2422 153.011 86.6937 153.011 86.6937C153.011 86.6937 173.065 117.08 182 132.5L155.5 148.792L133.155 115.365C133.155 115.365 103.332 115.239 90.6945 115.365L90.1473 86.4205Z"
        fill="white"
      />
      <path
        d="M3.54369 114.439C7.49509 128.058 14.6262 140.543 24.3493 150.866C34.0724 161.189 46.1093 169.053 59.4681 173.811C72.8268 178.57 87.125 180.085 101.184 178.234C115.244 176.382 128.662 171.217 140.334 163.162L123.253 138.411C115.503 143.759 106.594 147.189 97.2581 148.419C87.9227 149.648 78.4288 148.642 69.5587 145.482C60.6885 142.323 52.6961 137.101 46.24 130.247C39.7839 123.392 35.0489 115.102 32.4252 106.059L3.54369 114.439Z"
        fill="white"
      />
    </svg>
  );
};

export default GonewsIcon;

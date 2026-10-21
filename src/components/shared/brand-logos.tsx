import type { SVGProps } from "react";

type LogoProps = SVGProps<SVGSVGElement>;

export function ToolsLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      role="img"
      aria-label="Utility Tools logo: U with two dots"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="44" cy="15" r="7.5" fill="#111615" />
      <circle cx="81" cy="15" r="7.5" fill="#111615" />
      <path
        d="M27 32 V62 C27 84 41 99 62 99 C83 99 101 84 101 62 V32"
        stroke="#111615"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LinguaLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      fill="none"
      role="img"
      aria-label="Utility Lingua logo: L with two dots"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="43" cy="17" r="8" fill="#111615" />
      <circle cx="80" cy="17" r="8" fill="#111615" />
      <path
        d="M38 39 V77 Q38 94 55 94 H91"
        stroke="#111615"
        strokeWidth="12"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function BusinessLogo(props: LogoProps) {
  return (
    <svg
      viewBox="0 0 128 128"
      role="img"
      aria-label="Utility Business logo: B with two dots"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="46" cy="17" r="7.5" fill="#111615" />
      <circle cx="82" cy="17" r="7.5" fill="#111615" />
      <text
        x="64"
        y="105"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="96"
        fontWeight="900"
        fill="#111615"
      >
        B
      </text>
    </svg>
  );
}

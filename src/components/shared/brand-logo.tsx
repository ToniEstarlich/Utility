import type { CSSProperties } from "react";

type Brand = "tools" | "lingua" | "business";

type BrandLogoProps = {
  brand?: Brand;
  size?: number;
  className?: string;
};

const configurations = {
  tools: {
    label: "Utility Tools",
    color: "#DFFF45",
  },
  lingua: {
    label: "Utility Lingua",
    color: "#FF9500",
  },
  business: {
    label: "Utility Business",
    color: "#58B9FF",
  },
};

export function BrandLogo({
  brand = "tools",
  size = 39,
  className,
}: BrandLogoProps) {
  const config = configurations[brand];

  const style = {
    "--brand-color": config.color,
    width: size,
    height: size,
  } as CSSProperties;

  return (
    <span
      className={`brand-icon brand-icon-${brand}${className ? ` ${className}` : ""}`}
      style={style}
    >
      <svg
        viewBox="0 0 128 128"
        role="img"
        aria-label={`${config.label} logo`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {brand === "tools" && (
          <>
            <circle cx="44" cy="15" r="7.5" />
            <circle cx="81" cy="15" r="7.5" />
            <path d="M27 32 V62 C27 84 41 99 62 99 C83 99 101 84 101 62 V32" />
          </>
        )}

        {brand === "lingua" && (
          <>
            <circle cx="43" cy="17" r="8" />
            <circle cx="80" cy="17" r="8" />
            <path d="M38 39 V77 Q38 94 55 94 H91" />
          </>
        )}

        {brand === "business" && (
          <>
            <circle cx="46" cy="17" r="7.5" />
            <circle cx="82" cy="17" r="7.5" />
            <text
              x="64"
              y="105"
              textAnchor="middle"
              fontSize="96"
              fontWeight="900"
              fontFamily="Arial, Helvetica, sans-serif"
            >
              B
            </text>
          </>
        )}
      </svg>
    </span>
  );
}

import type { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  eyebrowColor?: "orange" | "green" | "gold";
}

const eyebrowColors: Record<string, string> = {
  orange: "text-orange",
  green: "text-green",
  gold: "text-gold",
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  eyebrowColor = "orange",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <ScrollReveal direction="up">
      <div className={`max-w-2xl ${centered ? "mx-auto text-center" : ""}`}>
        <span
          className={`inline-flex items-center text-xs font-medium uppercase tracking-[0.15em] ${eyebrowColors[eyebrowColor]}`}
        >
          {eyebrow}
        </span>

        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-warm-gray-900 sm:text-3xl lg:text-4xl lg:leading-[1.15]">
          {title}
        </h2>

        {description && (
          <p className="mt-4 text-base leading-relaxed text-warm-gray-500">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}

"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark" || (!theme && resolvedTheme === "dark");
  const Icon = isDark ? Sun : Moon;

  return (
    <button
      aria-label="Toggle theme"
      className="p-2 rounded-lg border"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      suppressHydrationWarning
    >
      {mounted ? (
        <Icon size={18} />
      ) : (
        // placeholder to keep layout stable during SSR
        <span className="inline-block w-[18px] h-[18px]" />
      )}
    </button>
  );
}

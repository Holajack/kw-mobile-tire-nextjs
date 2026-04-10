"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <button className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center" aria-label="Toggle theme">
        <div className="w-4 h-4" />
      </button>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="w-9 h-9 rounded-lg border border-slate-300 dark:border-slate-700 flex items-center justify-center hover:border-primary transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun className="w-4 h-4 text-slate-300" /> : <Moon className="w-4 h-4 text-slate-600" />}
    </button>
  );
}

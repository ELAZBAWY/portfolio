import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg dark:shadow-yellow-500/50 shadow-gray-900/50"
      aria-label="Toggle theme"
    >
      {/* خلفية متغيرة مع الوضع */}
      <div
        className={`absolute inset-0 rounded-full transition-colors duration-500
          ${isDark ? "bg-gray-900" : "bg-yellow-200"}
        `}
      ></div>

      {/* أيقونة القمر */}
      <Moon
        className={`w-6 h-6 absolute transition-all duration-500
          ${
            isDark
              ? "opacity-0 rotate-180 text-gray-200"
              : "opacity-100 rotate-0 text-gray-800"
          }
        `}
      />

      {/* أيقونة الشمس */}
      <Sun
        className={`w-6 h-6 absolute transition-all duration-500
          ${
            isDark
              ? "opacity-100 rotate-0 text-yellow-400"
              : "opacity-0 -rotate-180 text-gray-800"
          }
        `}
      />
    </button>
  );
}

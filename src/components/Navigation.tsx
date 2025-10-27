import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

interface NavigationProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDark, toggleTheme }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Me', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-yellow-500/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent">
            Ahmed Alazzbaawy
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-yellow-400 transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

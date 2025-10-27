import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-yellow-500/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400 flex items-center space-x-2">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
            <span>by Ahmed Alazzbaawy</span>
          </p>
          <p className="text-gray-600 dark:text-gray-400 mt-4 md:mt-0">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

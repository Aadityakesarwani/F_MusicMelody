import { AudioWaveform } from "lucide-react";

export default function Header() {

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b border-purple-200 dark:border-purple-800 bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
      <a className="flex items-center justify-center" href="#">
        <AudioWaveform className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          Music Melody
        </span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
          Features
        </a>
        <a className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
          Pricing
        </a>
        <a className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
          FAQs
        </a>
        <a className="text-sm font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors" href="#">
          Sign In
        </a>
      </nav>
    </header>
  );
}

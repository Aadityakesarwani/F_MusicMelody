export default function Footer() {
    return (
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white/50 backdrop-blur-sm dark:bg-gray-800/50">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          © 2024 Music Melody. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            href="#"
          >
            Terms of Service
          </a>
          <a
            className="text-xs hover:underline underline-offset-4 text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400"
            href="#"
          >
            Privacy
          </a>
        </nav>
      </footer>
    );
  }
  
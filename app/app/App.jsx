import ThemeToggle from "./ThemeToggle";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white flex flex-col items-center justify-center">
      
      {/* Theme Toggle Button */}
      <ThemeToggle />

      {/* Responsive Content */}
      <div className="p-4 md:p-8 lg:p-12 text-center">
        <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold text-brand">
          Responsive & Theme Aware UI
        </h1>

        <p className="mt-4 text-sm md:text-base lg:text-lg">
          Resize the screen and toggle the theme to test responsiveness.
        </p>
      </div>
    </div>
  );
}

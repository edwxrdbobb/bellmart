import { ThemeProvider } from './context/ThemeContext';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="p-4">
          <ThemeToggle />
        </header>
        {/* Your other app content */}
      </div>
    </ThemeProvider>
  );
}

export default App; 
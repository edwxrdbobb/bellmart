import '@/assets/styles/main.css';

import { ThemeProvider } from './context/ThemeContext';
import { ReactNode } from 'react';
interface AppProps {
  children: ReactNode;
}

function App({ children }: AppProps) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default App; 
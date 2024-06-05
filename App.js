import { ThemeProvider } from './src/contexts/ThemeContext';
import AppNavigator from './src/navigaton/AppNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}


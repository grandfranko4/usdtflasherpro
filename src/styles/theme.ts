import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    primary: '#00ff00', // Bright green
    primaryDark: '#008000', // Darker green
    secondary: '#000000', // Black
    textPrimary: '#ffffff', // White
    textSecondary: '#cccccc', // Light gray
    accent: '#00cc00', // Accent green
    backgroundDark: '#0a0a0a', // Very dark gray, almost black
    backgroundLight: '#1a1a1a', // Dark gray
    success: '#4caf50', // Green
    warning: '#ff9800', // Orange
    error: '#f44336', // Red
  },
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  transition: '0.3s',
};

export default theme;

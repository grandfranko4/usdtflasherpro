import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      secondary: string;
      textPrimary: string;
      textSecondary: string;
      accent: string;
      backgroundDark: string;
      backgroundLight: string;
      success: string;
      warning: string;
      error: string;
    };
    borderRadius: string;
    boxShadow: string;
    transition: string;
  }
}

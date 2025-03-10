import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #00ff00; /* Bright green */
    --primary-dark: #008000; /* Darker green */
    --secondary-color: #000000; /* Black */
    --text-color: #ffffff; /* White */
    --text-secondary: #cccccc; /* Light gray */
    --accent-color: #00cc00; /* Accent green */
    --background-dark: #0a0a0a; /* Very dark gray, almost black */
    --background-light: #1a1a1a; /* Dark gray */
    --success-color: #4caf50; /* Green */
    --warning-color: #ff9800; /* Orange */
    --error-color: #f44336; /* Red */
    --border-radius: 8px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition-speed: 0.3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Poppins', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background-dark);
    color: var(--text-color);
    line-height: 1.6;
    font-size: 16px;
    overflow-x: hidden;
  }

  a {
    color: var(--primary-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease;
    
    &:hover {
      color: var(--accent-color);
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
    color: var(--text-color);
  }

  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-size: 2rem;
  }

  h3 {
    font-size: 1.75rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button, .button {
    background-color: var(--primary-color);
    color: var(--secondary-color);
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: var(--border-radius);
    font-weight: 600;
    cursor: pointer;
    transition: background-color var(--transition-speed) ease;
    
    &:hover {
      background-color: var(--accent-color);
    }
    
    &:disabled {
      background-color: var(--text-secondary);
      cursor: not-allowed;
    }
  }

  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  section {
    padding: 4rem 0;
  }

  .text-center {
    text-align: center;
  }

  .text-gradient {
    background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  .card {
    background-color: var(--background-light);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    box-shadow: var(--box-shadow);
    transition: transform var(--transition-speed) ease;
    
    &:hover {
      transform: translateY(-5px);
    }
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
    
    h2 {
      font-size: 1.75rem;
    }
    
    h3 {
      font-size: 1.5rem;
    }
    
    section {
      padding: 2rem 0;
    }
  }
`;

export default GlobalStyles;

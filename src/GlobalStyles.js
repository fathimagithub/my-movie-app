import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #333;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.5;
  }

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      color: #0056b3;
    }
  }
`;

export default GlobalStyles;
import React, { useEffect } from 'react';
import Home from './pages/Home';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  useEffect(() => {}, []);

  return (
    <div className="App">
      <Home />
      <GlobalStyle />
    </div>
  );
};

export default App;

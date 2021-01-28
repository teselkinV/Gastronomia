import React from 'react';
import './App.css';

import Routerc from './components/Routerc';
import { LanguageProvider } from './components/Language/Language';

function App() {
  return (
    <LanguageProvider >
    <div className="App">
     <Routerc />
    </div>
    </LanguageProvider>
  );
}

export default App;

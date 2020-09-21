import React from 'react';
import Routing from './Routing';
import { ContextProvider } from './Context/Context';

const App = () => {
  return (
    <ContextProvider>
      <div>
      <Routing />
    </div>
    </ContextProvider>
    
  )
}

export default App

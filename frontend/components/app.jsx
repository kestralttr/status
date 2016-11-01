import React from 'react';
import GreetingsContainer from './greeting/greeting_container';

const App = ({children}) => (
  <div>
    <h1>Status Test</h1>
    <GreetingsContainer />
    {children}
  </div>
);

export default App;

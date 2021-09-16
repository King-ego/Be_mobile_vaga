import React from 'react';

import Global from './ui/style/global';

import Employees from './Pages/Employees';

const App: React.FC = () => {
  return (
    <>
      <Employees />
      <Global />
    </>
  );
};

export default App;

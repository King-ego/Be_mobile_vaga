import React from 'react';

import Global from './UI/style/global';

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

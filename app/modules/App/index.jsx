import React, { useState } from 'react';
import KDocs from '../kdocs';
import GlobalStyle from '../../global-styles';

function App(props) {
  return (
    <div>
      <GlobalStyle />
      <KDocs />
    </div>
  );
}

export default App;

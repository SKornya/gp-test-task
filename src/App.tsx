import { useState } from 'react';

import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import Header from './components/Header/Header';
import Content from './components/Content/Content';

import './App.css';

const currencies: string[] = ['$', '€', '¥'];

function App() {
  // храним тип валюты здесь, чтобы передавать его в оба дочерних компонента
  // и не использовать контекст, редакс и т.п.
  const [currency, setCurrency] = useState<string>(currencies[0]);

  return (
    <Theme className="container" preset={presetGpnDefault}>
      <Header
        currency={currency}
        currencies={currencies}
        setCurrency={setCurrency}
      />
      <Content currency={currency} />
    </Theme>
  );
}

export default App;

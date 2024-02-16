import Header from './components/Header/Header';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import Content from './components/Content/Content';

function App() {
  return (
    <Theme className='container' preset={presetGpnDefault}>
      <Header />
      <Content />
    </Theme>
  );
}

export default App;

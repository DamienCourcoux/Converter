// == Import
import Title from 'src/components/Title';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Title />
    <Currencies />
    <Result />
  </div>
);

// == Export
export default App;

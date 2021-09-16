// == Import
import Title from 'src/components/Title';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import './app.scss';
import currenciesData from 'src/data/currencies';

// == Composant
const App = () => (
  <div className="app">
    <Title
      title="Converter"
      description="1 euro"
    />
    <Currencies
      title="Currencies"
      lists={currenciesData}
    />
    <Result
      price="1.09"
      money="United States Dollar"
    />
  </div>
);

// == Export
export default App;

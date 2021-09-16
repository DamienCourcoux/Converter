// == Import
import Title from 'src/components/Title';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import './app.scss';

// == Composant
const App = () => (
  <div className="app">
    <Title
      title="Converter"
      description="1 euro"
    />
    <Currencies
      title="Currencies"
      lists={['Australian Dollar', 'Bulgarian Lev', 'Brazilian Real', 'Canadian Dollar', 'Swiss Franc']}
    />
    <Result
      price="1.09"
      money="United States Dollar"
    />
  </div>
);

// == Export
export default App;

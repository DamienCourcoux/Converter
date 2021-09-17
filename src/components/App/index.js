/* eslint-disable max-len */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
// == Import
import Title from 'src/components/Title';
import Currencies from 'src/components/Currencies';
import Result from 'src/components/Result';
import './app.scss';
import currenciesData from 'src/data/currencies';
import React from 'react';
import Toggler from 'src/components/Toggler';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCurrenciesListOpen: true,
      baseAmount: 1,
      selectedCurrency: 'British Pound',
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleClickToCurrency = this.handleClickToCurrency.bind(this);
  }

  handleClickToCurrency(event) {
    this.setState({
      selectedCurrency: event.target.outerText,
    });
  }

  handleToggleClick() {
    this.setState({
      isCurrenciesListOpen: !this.state.isCurrenciesListOpen,
    });
  }

  computeResult() {
    // dans le callback, je dois renvoyer true pour dire que je veux garder cet élément
    // ok mais je veux garder quel element ?
    // celui qui a le même nom que this.state.selectedCurrency
    const foundCurrency = currenciesData.find((currency) => currency.name === this.state.selectedCurrency);

    const conversionRate = foundCurrency.rate;
    // 2eme probleme => faire le calcul
    const result = conversionRate * this.state.baseAmount;

    // on renvoie
    return result;
  }

  render() {
    return (
      <div className="app">
        <Title
          title="Converter"
          description={this.state.baseAmount}
        />
        <Toggler
          isCurrenciesListOpen={this.state.isCurrenciesListOpen}
          handleToggleClick={this.handleToggleClick}
        />
        {this.state.isCurrenciesListOpen && <Currencies title="Currencies" lists={currenciesData} handleClickToCurrency={this.handleClickToCurrency} />}
        <Result
          price={this.computeResult()}
          money={this.state.selectedCurrency}
        />
      </div>
    );
  }
}

// == Composant
// const App = () => (

// );

// == Export
export default App;

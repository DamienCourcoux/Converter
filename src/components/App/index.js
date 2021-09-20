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
      baseAmount: 0,
      selectedCurrency: 'Mexican Peso',
      searchValue: '',
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
    this.handleClickToCurrency = this.handleClickToCurrency.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleConverterChange = this.handleConverterChange.bind(this);
  }

  componentDidMount() {
    document.title = `Conversion de euro vers ${this.state.selectedCurrency}`;
  }

  componentDidUpdate(prepProps, prevState) {
    if (prevState.selectedCurrency !== this.state.selectedCurrency) {
      document.title = `Conversion de euro vers ${this.state.selectedCurrency}`;
    }
  }

  handleConverterChange(event) {
    this.setState({
      baseAmount: parseInt(Number(event.target.value), 10),
    });
  }

  handleSearchChange(event) {
    this.setState({
      searchValue: event.target.value,
    });
  }

  handleClickToCurrency(currencySelected) {
    this.setState({
      selectedCurrency: currencySelected,
    });
  }

  handleToggleClick() {
    this.setState({
      isCurrenciesListOpen: !this.state.isCurrenciesListOpen,
    });
  }

  getFilteredCurrencies() {
    if (this.state.searchValue === '') {
      return currenciesData;
    }

    const loweredSearch = this.state.searchValue.toLowerCase();

    const filteredCurrencies = currenciesData.filter((currency) => {
      const loweredCase = currency.name.toLowerCase();
      return loweredCase.includes(loweredSearch);
    });

    return filteredCurrencies;
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
          converterValue={this.state.baseAmount}
          setConverterValue={this.handleConverterChange}
        />
        <Toggler
          isCurrenciesListOpen={this.state.isCurrenciesListOpen}
          handleToggleClick={this.handleToggleClick}
        />
        {this.state.isCurrenciesListOpen && (
          <Currencies
            title="Currencies"
            lists={this.getFilteredCurrencies()}
            handleClickToCurrency={this.handleClickToCurrency}
            searchValue={this.state.searchValue}
            setSearchValue={this.handleSearchChange}
          />
        )}
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

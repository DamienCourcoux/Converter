// == Import
import './currencies.scss';
import PropTypes from 'prop-types';

// == Composant
const Currencies = ({
  title, lists, handleClickToCurrency, searchValue, setSearchValue,
}) => (
  <section className="currencies">
    <h2 className="currencies__title">{ title }</h2>
    <input
      value={searchValue}
      onChange={setSearchValue}
      className="currencies__input"
      placeholder="Recherchez une devise..."
    />
    <ul className="currencies__list">
      {
        lists.map((list) => (
          <li
            key={list.name}
            className="currencies__item"
            onClick={() => {
              handleClickToCurrency(list.name);
            }}
          >
            { list.name }
          </li>
        ))
      }
    </ul>
  </section>
);

// == PropTypes
Currencies.propTypes = {
  title: PropTypes.string.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      rate: PropTypes.number,
    }).isRequired,
  ).isRequired,
  handleClickToCurrency: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  setSearchValue: PropTypes.func.isRequired,
};

// == Export
export default Currencies;

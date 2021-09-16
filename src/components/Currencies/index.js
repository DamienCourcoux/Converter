// == Import
import './currencies.scss';
import PropTypes from 'prop-types';

// == Composant
const Currencies = ({ title, lists }) => (
  <section className="currencies">
    <h2 className="currencies__title">{ title }</h2>
    <ul className="currencies__list">
      {lists.map((list) => <li key={list.name} className="currencies__item">{ list.name }</li>)}
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
};

// == Export
export default Currencies;

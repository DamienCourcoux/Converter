import PropTypes from 'prop-types';

const Toggler = ({ isCurrenciesListOpen, handleToggleClick }) => (
  <button
  // si la liste est ouverte, je vais ajouter une classe : toggler--open
    className={isCurrenciesListOpen ? 'toggler toggler--open' : 'toggler'}
    type="button"
    onClick={handleToggleClick}
  >
    =
  </button>
);

Toggler.propTypes = {
  isCurrenciesListOpen: PropTypes.bool.isRequired,
  handleToggleClick: PropTypes.func.isRequired,
};

export default Toggler;

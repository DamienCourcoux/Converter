// == Import
import './title.scss';
import PropTypes from 'prop-types';

// == Composant
const Title = ({
  title, converterValue, setConverterValue,
}) => (
  <header className="header">
    <h1 className="header__title">
      { title }
    </h1>
    <div className="header__container">
      <input
        value={converterValue}
        onChange={setConverterValue}
        className="header__container__desc"
        placeholder="Montant à convertir en euros"
        type="number"
        min="0"
      />
      <p className="header__container__symbole">€</p>
    </div>
    {/* <p className="">
      { converterValue } euro
    </p> */}
  </header>
);

// == PropTypes
Title.propTypes = {
  title: PropTypes.string.isRequired,
  // description: PropTypes.number.isRequired,
  converterValue: PropTypes.number.isRequired,
  setConverterValue: PropTypes.func.isRequired,
};

// == Export
export default Title;

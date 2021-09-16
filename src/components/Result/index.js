// == Import
import './result.scss';
import PropTypes from 'prop-types';

// == Composant
const Result = ({ price, money }) => (
  <section className="result">
    <p className="price">{ price }</p>
    <p className="country">{ money }</p>
  </section>
);

// == PropTypes
Result.propTypes = {
  price: PropTypes.string.isRequired,
  money: PropTypes.string.isRequired,
};

// == Export
export default Result;

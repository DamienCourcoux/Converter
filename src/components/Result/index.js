// == Import
import './result.scss';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';

// == Composant
const Result = ({ price, money }) => (
  <section className="result">
    {/* <p className="price">{ price }</p> */}
    <CountUp
      className="price"
      decimals={2}
      duration={0.5}
      end={price}
    />
    <p className="country">{ money }</p>
  </section>
);

// == PropTypes
Result.propTypes = {
  price: PropTypes.number.isRequired,
  money: PropTypes.string.isRequired,
};

// == Export
export default Result;

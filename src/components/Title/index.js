// == Import
import './title.scss';
import PropTypes from 'prop-types';

// == Composant
const Title = ({ title, description }) => (
  <header className="header">
    <h1 className="header__title">
      { title }
    </h1>
    <p className="header__desc">
      { description } euro
    </p>
  </header>
);

// == PropTypes
Title.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.number.isRequired,
};

// == Export
export default Title;

import PropTypes from 'prop-types';
import './Filter.css';

export const Filter = ({ changeFilter }) => {
  return (
    <label className="FilterLabel" htmlFor="">
      Find contacts by name
      <input
        className="FilterInput"
        type="text"
        name="name"
        onChange={e => {
          changeFilter(e.currentTarget.value);
        }}
      />
    </label>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

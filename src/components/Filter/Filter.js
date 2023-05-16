import PropTypes from 'prop-types';

export function Filter({ filter, handleFilterChange }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        input={filter}
        name="filter"
        onChange={handleFilterChange}
      />
    </label>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

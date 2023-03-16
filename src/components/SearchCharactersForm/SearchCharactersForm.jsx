import PropTypes from 'prop-types';
import css from './SearchCharactersForm.module.css';

export const SearchCharactersForm = ({ onFormSubmit, inputChange }) => {
  return (
    <form className={css.form} onSubmit={onFormSubmit}>
      <button className={css.btn} type="submit">
        <span className={css.span}></span>
      </button>
      <input
        placeholder="Filter by name..."
        className={css.input}
        onChange={inputChange}
      />
    </form>
  );
};

SearchCharactersForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
  inputChange: PropTypes.func.isRequired,
};

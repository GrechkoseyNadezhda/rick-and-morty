import PropTypes from 'prop-types';
import css from './CharacterDetails.module.css';

export const CharacterDetails = ({ character }) => {
  const { image, name, gender, status, origin, species, type } = character;
  const info = 'No information';
  return (
    <div className={css.details}>
      <div className={css.detailsImg}>
        <img src={image} alt={name} />
      </div>
      <h2 className={css.title}>{name}</h2>

      <p className={css.subtitle}>Informations</p>
      <ul className={css.list}>
        <li className={css.item}>
          <h3 className={css.infoTitle}>Gender</h3>
          <p className={css.descr}>{gender ? gender : info}</p>
        </li>
        <li className={css.item}>
          <h3 className={css.infoTitle}>Status</h3>
          <p className={css.descr}>{status ? status : info}</p>
        </li>
        <li className={css.item}>
          <h3 className={css.infoTitle}>Species</h3>
          <p className={css.descr}>{species ? species : info}</p>
        </li>
        <li className={css.item}>
          <h3 className={css.infoTitle}>Origin</h3>
          <p className={css.descr}>{origin.name ? origin.name : info}</p>
        </li>
        <li className={css.item}>
          <h3 className={css.infoTitle}>Type</h3>
          <p className={css.descr}>{type ? type : info}</p>
        </li>
      </ul>
    </div>
  );
};

CharacterDetails.propTypes = {
  character: PropTypes.object.isRequired,
};

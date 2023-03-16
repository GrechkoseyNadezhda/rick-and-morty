import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import css from './CharactersList.module.css';

export const CharactersList = ({ characters }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {characters.map(({ image, name, id, species }) => {
        let newName;
        if (name.length > 19) {
          newName = name.slice(0, 19) + '...';
        } else {
          newName = name;
        }
        return (
          <li className={css.item} key={id}>
            <Link
              className={css.link}
              to={`/character/${id}`}
              state={{ from: location }}
            >
              <div className={css.imgWrap}>
                <img src={`${image}`} alt={name} />
              </div>
              <div className={css.infoWrap}>
                <h2 className={css.title}>{newName}</h2>
                <p className={css.info}>{species}</p>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import { useState, useEffect } from 'react';
import { CharacterDetails } from '../../components/CharacterDetails/CharacterDetails';
import css from './Details.module.css';
import arrow from 'images/arrow_back.svg';

import { useParams, useLocation, Link } from 'react-router-dom';
import { getCharacterById } from '../../service/api';

export const Details = () => {
  const location = useLocation();
  const { idCharacter } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacterById(idCharacter).then(data => {
      setCharacter(data);
    });
  }, [idCharacter]);

  if (!character) {
    return;
  }

  return (
    <>
      <div className={css.goBackWrap}>
        <Link className={css.goBack} to={location.state?.from ?? '/'}>
          <img className={css.goBackImg} src={arrow} alt="arrow" />
          <p className={css.goBackText}>Go back</p>
        </Link>
      </div>

      <CharacterDetails character={character} />
    </>
  );
};

export default Details;

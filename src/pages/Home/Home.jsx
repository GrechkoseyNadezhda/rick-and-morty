import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharactersList } from 'components/CharactersList/CharactersList';
import { Logo } from 'components/Logo/Logo';
import { Loader } from 'components/Loader/Loader';
import { NotFoundPage } from 'components/NotFound/NotFound';

import css from './Home.module.css';

import { getCharacterByQuery } from '../../service/api';
import { SearchCharactersForm } from '../../components/SearchCharactersForm/SearchCharactersForm';
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query') ?? '';

  useEffect(() => {
    setIsLoading(true);
    getCharacterByQuery(searchName)
      .then(({ results }) => {
        results = results.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
        setCharacters(results);
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false), setError(null));
  }, [searchName]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
  };

  const inputChange = event => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={css.homeWrapper}>
        <Logo />
        <SearchCharactersForm
          onFormSubmit={onFormSubmit}
          inputChange={inputChange}
        />
        {error ? <NotFoundPage /> : <CharactersList characters={characters} />}
      </div>
    </>
  );
};

export default Home;

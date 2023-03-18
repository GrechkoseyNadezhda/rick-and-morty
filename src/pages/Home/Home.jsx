import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CharactersList } from 'components/CharactersList/CharactersList';
import { Logo } from 'components/Logo/Logo';
import { Loader } from 'components/Loader/Loader';
import { NotFoundPage } from 'components/NotFound/NotFound';
import { Pagination } from '@mui/material';

import css from './Home.module.css';

import { getCharacterByQuery } from '../../service/api';
import { SearchCharactersForm } from '../../components/SearchCharactersForm/SearchCharactersForm';
const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [pageAmount, setPageAmount] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchName = searchParams.get('query') ?? '';
  useEffect(() => {
    setIsLoading(true);
    getCharacterByQuery(searchName, page)
      .then(({ results, info }) => {
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
        setPageAmount(info.pages);
      })
      .catch(error => setError(error.message), setPageAmount(0))
      .finally(() => setIsLoading(false), setError(null));
  }, [searchName, page]);

  const onFormSubmit = e => {
    e.preventDefault();
    setSearchParams({ query: searchQuery });
    setPage(1);
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

        <div className={css.paginationWrap}>
          {!!pageAmount && (
            <Pagination
              count={pageAmount}
              page={page}
              onChange={(_, number) => setPage(number)}
              sx={{
                '& li': {
                  width: 34,
                },
              }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Home;

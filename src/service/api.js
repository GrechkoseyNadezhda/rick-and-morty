import axios from 'axios';

const instanceCharacter = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getAllCharacters = async () => {
  const { data } = await instanceCharacter.get('/character', {
    params: {
      page: 1,
    },
  });
  return data;
};

export const getCharacterById = async id => {
  const { data } = await instanceCharacter.get(`/character/${id}`);
  return data;
};

export const getCharacterByQuery = async query => {
  if (query.length === 0) {
    const { data } = await instanceCharacter.get('/character', {
      page: 1,
    });
    return data;
  } else {
    const { data } = await instanceCharacter.get(`/character/?name=${query}`, {
      params: {
        page: 1,
        name: query,
      },
    });
    return data;
  }
};

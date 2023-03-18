import axios from 'axios';

const instanceCharacter = axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacterById = async id => {
  const { data } = await instanceCharacter.get(`/character/${id}`);
  return data;
};

export const getCharacterByQuery = async (query, page) => {
  if (query.length === 0) {
    const { data } = await instanceCharacter.get(`/character`, {
      params: {
        page,
      },
    });
    return data;
  } else {
    const { data } = await instanceCharacter.get(`/character`, {
      params: {
        page,
        name: query,
      },
    });
    return data;
  }
};

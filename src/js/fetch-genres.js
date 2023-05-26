import axios from 'axios';
const API_key = 'dbea77d3eb5b3622b027f73f6a5032fe';

export const genreList = {};

export const getGenres = async () => {
  try {
    const searchGenresAPI_URL = 'https://api.themoviedb.org/3/genre/movie/list';
    const response = await axios.get(`${searchGenresAPI_URL}?api_key=${API_key}&language=en-US`);

    // console.log('response getGenres', response);

    const genres = response.data.genres;
    // console.log('genres', genres);

    genres.forEach(genre => {
      genreList[genre.id] = genre.name;
    });
  } catch (error) {
    console.error(error);
  }
};

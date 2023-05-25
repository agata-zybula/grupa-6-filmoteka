
import { createMovieCard } from './create-movie-card';

const getGenres = async () => {
 try {
 const fetchGenres = await fetch(
 `https://api.themoviedb.org/3/genre/movie/list?api_key=fe36e1a920a96782eff1e1dab760f0ae&language=en-US`
 );
 const genres = await fetchGenres.json();
 return genres;
 } catch (error) {
 console.log(error.message);
 }
};

 const galleryEl = document.querySelector('.cards-wrapper');

 const getMovies = async () => {
 try {
 const fetchMovies = await fetch(
 `https://api.themoviedb.org/3/trending/all/day?api_key=fe36e1a920a96782eff1e1dab760f0ae&page=1`
 );
 const movies = await fetchMovies.json();
 return movies;
 } catch (error) {
 console.log(error.message);
 }
 };
 const createGallery = async () => {
  const movies = await getMovies();
  const genres = await getGenres();
 galleryEl.innerHTML = await createMovieCard(movies);
 }

 createGallery();
 



 
// const API_KEY = 'fe36e1a920a96782eff1e1dab760f0ae';
//  async function fetchGenres() {
//  console.log('fetchGenres started');
//  const searchParams = new URLSearchParams({
//  api_key: API_KEY
//  });
 
//  const url = `https://api.themoviedb.org/3/genre/movie/list?${searchParams}`;
//  console.log('fetchGenres url:', url);
 
//  const response = await fetch(url);
//  console.log('fetchGenres response:', response);
//  const genres = await response.json();
//  console.log('fetchGenres genres:', genres);
 
//  return genres;
//  }
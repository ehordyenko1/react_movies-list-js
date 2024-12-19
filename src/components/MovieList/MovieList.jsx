import { MovieCard } from '../MovieCard/MovieCard';
import './MovieList.scss';

export const MovieList = ({ films }) => (
  <div className="films" data-cy="movies-container">
    {films.map(film => (
      <MovieCard key={film.imdbId} film={film} />
    ))}
  </div>
);

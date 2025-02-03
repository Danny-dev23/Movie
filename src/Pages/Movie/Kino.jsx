import React, { useEffect, useState } from "react";
import "./movie.css";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Kino = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://www.omdbapi.com/?i=tt3896198&apikey=fea86f46"
        );
        const data = await response.json();

        // Дублируем фильм 6 раз (имитация списка)
        const moviesList = [...Array(6)].map(() => data);

        setMovies(moviesList);
        setFilteredMovies(moviesList);
      } catch (error) {
        console.error("Ошибка загрузки фильмов:", error);
      }
    };

    fetchMovies();
  }, []);

  // Фильтрация по поиску, жанру и году
  useEffect(() => {
    let filtered = movies;

    if (search) {
      filtered = filtered.filter((movie) =>
        movie.Title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (genre) {
      filtered = filtered.filter((movie) =>
        movie.Genre.toLowerCase().includes(genre.toLowerCase())
      );
    }

    if (year) {
      filtered = filtered.filter((movie) => movie.Year === year);
    }

    setFilteredMovies(filtered);
  }, [search, genre, year, movies]);

  // Открытие модального окна с подробностями
  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  // Закрытие модального окна
  const handleClose = () => {
    setSelectedMovie(null);
  };

  return (
    <div className="movie">
      <div className="movie-block">
        {/* Фильтры */}
        <Container>
          <div className="movie-filter">
            <TextField
              label="Поиск по названию"
              variant="outlined"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="filter-input"
            />
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              displayEmpty
              className="filter-select"
            >
              <MenuItem value="">Все жанры</MenuItem>
              <MenuItem value="Action">Боевик</MenuItem>
              <MenuItem value="Adventure">Приключения</MenuItem>
              <MenuItem value="Fantasy">Фэнтези</MenuItem>
              <MenuItem value="Detective">Детектив</MenuItem>
            </Select>
            <TextField
              label="Год"
              variant="outlined"
              size="small"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="filter-input"
            />
          </div>
        </Container>

        <div className="movie">
          <Container>
            <div className="product-list">
              {filteredMovies.length > 0 ? (
                filteredMovies.map((movie, index) => (
                  <div
                    key={index}
                    className="movie-card"
                    onClick={() => handleMovieClick(movie)}
                  >
                    <h2>
                      {movie.Title} ({movie.Year})
                    </h2>
                    <img
                      src={movie.Poster}
                      alt={movie.Title}
                      className="movie-poster"
                    />
                    <p>
                      <strong>Жанр:</strong> {movie.Genre}
                    </p>
                    <p>
                      <strong>Режиссер:</strong> {movie.Director}
                    </p>
                    <p>
                      <strong>Рейтинг IMDb:</strong> {movie.imdbRating}
                    </p>
                  </div>
                ))
              ) : (
                <p className="no-movies">Скоро фильмы будут...</p>
              )}
            </div>
          </Container>
        </div>
      </div>

      <Dialog
        open={!!selectedMovie}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedMovie && (
          <>
            <DialogTitle>
              {selectedMovie.Title} ({selectedMovie.Year})
              <IconButton
                aria-label="close"
                onClick={handleClose}
                style={{ position: "absolute", right: 10, top: 10 }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <div className="movie-details">
                <img
                  src={selectedMovie.Poster}
                  alt={selectedMovie.Title}
                  className="movie-details-poster"
                />
                <div className="movie-details-info">
                  <p>
                    <strong>Описание:</strong> {selectedMovie.Plot}
                  </p>
                  <p>
                    <strong>Режиссер:</strong> {selectedMovie.Director}
                  </p>
                  <p>
                    <strong>Актеры:</strong> {selectedMovie.Actors}
                  </p>
                  <p>
                    <strong>Жанр:</strong> {selectedMovie.Genre}
                  </p>
                  <p>
                    <strong>Длительность:</strong> {selectedMovie.Runtime}
                  </p>
                  <p>
                    <strong>Рейтинг IMDb:</strong> {selectedMovie.imdbRating}
                  </p>
                  <p>
                    <strong>Награды:</strong> {selectedMovie.Awards}
                  </p>
                  <p>
                    <strong>Бюджет:</strong> {selectedMovie.BoxOffice}
                  </p>
                </div>
              </div>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
};

export default Kino;

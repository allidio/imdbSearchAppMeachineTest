import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List() {
  const [movies, setMovies] = React.useState(null);
  const [search, setSearch] = React.useState();
  const [page, setPage] = React.useState(1);
  const [totalResults, settotalResults] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  React.useEffect(() => {
    if (search) {
      setDisabled(true);
      axios
        .get(
          `https://www.omdbapi.com/?apikey=33b27cf1&s=${search}&page=${page}`
        )
        .then(
          (response) => {
            settotalResults(response.data.totalResults);
            setMovies(response.data.Search);
            setDisabled(false);
          },
          (error) => {
            console.log(error);
            setDisabled(false);
            setMovies(null);
          }
        );
    }
  }, [search, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePrev = (e) => {
    setPage(page - 1);
  };

  const handleNext = (e) => {
    setPage(page + 1);
  };
  return (
    <div>
      Search :
      <input type="text" onChange={handleSearchChange} />
      {disabled ? (
        <>...</>
      ) : (
        <>
          {movies && (
            <>
              {movies.map((movie) => (
                <>
                  <li key={movie.imdbID}>
                    <Link to={`/detail/${movie.imdbID}`}>{movie.Title}</Link>
                  </li>
                </>
              ))}
            </>
          )}
        </>
      )}
      {page > 1 && (
        <button disabled={disabled} onClick={handlePrev}>
          {" "}
          Previous{" "}
        </button>
      )}
      {page * 10 < totalResults && (
        <button disabled={disabled} onClick={handleNext}>
          {" "}
          Next{" "}
        </button>
      )}
    </div>
  );
}

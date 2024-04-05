import CardMovie from "./CardMovie";
import PaginationCom from "./Pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovie } from "../redux/actions/movieAction";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovie());
  }, []);

  const dateMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dateMovies);
  }, [dateMovies]);

  return (
    <div className="flex justify-center my-[60px] flex-wrap">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov} />;
        })
      ) : (
        <h1>Mohammed No Movies</h1>
      )}
      {movies.length >= 1 ? (
        <div className="my-[40px]">
          <PaginationCom />
        </div>
      ) : null}
    </div>
  );
};

export default MoviesList;

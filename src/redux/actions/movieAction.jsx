import { AllMOVIES, MovieApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovie = () => {
  return async (dispatch) => {
    const res = await axios.get(MovieApi);
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


export const getMovieSearch = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?language=ar&query=${word}&api_key=fac98f76e7000d63025742be04984a46`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};


export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?language=ar&query=${page}&api_key=fac98f76e7000d63025742be04984a46`
    );
    dispatch({
      type: AllMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

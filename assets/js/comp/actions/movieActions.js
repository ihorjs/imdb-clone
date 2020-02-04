import axios from 'axios';
import moviesData from '../../moviesData'

import {GET_TRENDING_MOVIES,
        TOP_RATED_MOVIES,
        PICKED_MOVIE,
        SEARCH_MOVIE,
        GATHER_MOVIES
       } from './types';



export function getTrendingMovies(){
  return async(dispatch) =>{
  
  const search = new moviesData()
  await search.discoverMovies()
  console.log(search.result)
  const goodMovies = search.result
  
  
  dispatch({
    type: GET_TRENDING_MOVIES,
    payload: goodMovies
  })
}
}

export const getMovieInfo = () =>{
  return async(dispatch) =>{
  axios 
  .get('/api/movie')
  .then(res => 
   
  dispatch({
    type: GATHER_MOVIES,
    payload: res.data
  })
  )
    .catch(err =>
      console.log(err)
  )
    }
}


export const addLike = id => dispatch => {
  
  axios 
  .post(`/api/movie/like/${id}`)
  .then(res => dispatch(getMovieInfo())
    )
    .catch(err =>
      console.log(err)
  )
}

export const removeLike = id => dispatch => {
  axios 
  .post(`/api/movie/unlike/${id}`)
  .then(res =>dispatch(getMovieInfo())
    )
    .catch(err =>
      console.log(err)
  )
}


export function topRatedMovies(){
  return async(dispatch) =>{
  
  const search = new moviesData()
  await search.topRatedMovies()
  console.log(search.result)
  const goodMovies = search.result
  
  
  dispatch({
    type: TOP_RATED_MOVIES,
    payload: goodMovies
  })
}
}
      

export const pickedMovie = (movie) => dispatch => {

  dispatch({
    type: PICKED_MOVIE,
    payload: movie
  })

}

export const searchOneMovie = (movie) => dispatch => {

  dispatch({
    type: SEARCH_MOVIE,
    payload: movie
  })

}

 
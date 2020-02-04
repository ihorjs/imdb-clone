import axios from 'axios'

export default class moviesData{
  constructor(query){
    this.query = query
  }

  async getResults(){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = '55235c76109068a112aaa3dcd3a08bda';
   try{ 
    const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${this.query}`)
    this.result = res.data.results
    // console.log(this.result);
  } catch(error){
    alert(error);
  }
}

async discoverMovies(){
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '55235c76109068a112aaa3dcd3a08bda';
 try{ 
  const res = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`)
  this.result = res.data.results
  // console.log(this.result);
} catch(error){
  alert(error);
}
}

async topRatedMovies(){
  const proxy = 'https://cors-anywhere.herokuapp.com/'
  const key = '55235c76109068a112aaa3dcd3a08bda';
 try{ 
  const res = await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US`)
  this.result = res.data.results
  // console.log(this.result);
} catch(error){
  alert(error);
}
}




}
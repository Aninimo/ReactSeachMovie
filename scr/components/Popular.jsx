import React from "react"
import { useState,useEffect} from "react"
import { FiFilm } from "react-icons/fi"
import Movies from "./Movies"

import { Header, Main } from "./PopularStyle"

function Popular(){
  const[searchedMovie,setSearchedMovie] = useState('')
  const[popular,setPopular] = useState([])

  useEffect(() => {
    fetchPopular()
  },[])

  async function fetchSearchedMovie(e){
    try{
      const url = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=118de15e6c28ca6a86c9004c7c79e617&query=${searchedMovie}`)
      
      const db = await url.json()
      setPopular(db.results)
    }catch(e){
      console.log(e)
    }
  }

  const fetchPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=118de15e6c28ca6a86c9004c7c79e617&language=en-US&page=1')
                
    const movie = await data.json()
    setPopular(movie.results)
  }

  return(
    <>
     <Header>
      <div className="logo">
        <a href="#"><FoFilm/> React Moviesdb</a>
      </div>
      <div clasName="input">
      <input type="text" 
             value={searchedMovie} 
             onChange={e => setSearchedMovie(e.target.value)}/>
      <button onClick={fetchSearchMovie}>Search</button>
      </div>
     </Header>
     
     <Main>
      <div className="popularMovies">
        {popular.map((movie) => {
          return <Movies key={movie.id} movie={movie}/>
        })}
      </div>
     </Main>
    </>
  )
}

export default Popular

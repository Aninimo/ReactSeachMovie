import React from "react"
import { useState } from "react"
import Modal from "react-modal"

import { MoviesList, Container} from "./MoviesStyle"

Modal.setAppElement('#root')

function Movies({movies}){
  const[openModal,setOpenModal] = useState(false)

  function handleOpenModal(){
    setOpenModal(true)
  }

  function handleCloseModal(){
    setOpenModal(false)
  }

  return(
    <>
      <MoviesList onClick={handleOpenModal}>
         <h2>{movie.title}</h2>
         <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path}/>
      </MoviesList>
      <Modal
         isOpen={openModal}
         onRequestClose={handleCloseModal}
         overlayClassName="overlay"
         className="modal">
      </Modal>
       
    </>
  )
}

export default Movies

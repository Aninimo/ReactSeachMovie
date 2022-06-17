import styled from "styled-components"

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  padding: 2rem;

  .logo a{
    color: #fff;
  }

  input{
    padding: .5rem 2.5rem;
    border-radius: .5rem;
    border: none;
    outline: none;
  }

  button{
    padding: .6rem 1.5rem;
    border-radius: .5rem;
    margin-left: -5rem;
    margin-top: -1rem;
    border: none;  
    background: #0466c8;
    color: #fff;
    cursor: pointer:

    transition: .5s;
    
    :hover{
      background: #0353a4;
    }
  }

  @media screen and (max-width: 767px){
    display: block;
    text-align: center;

    input{
       padding: .5rem 1.5rem;
       margin-top: 1rem;
     }

     button{
       margin-top: .8rem;
       margin-left: -5.5rem;
     }
`

export const Main = styled.main`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 2rem;

  .popularMovies{
     display: grid;
     grid-template-columns: 1.95fr 1fr 1.95fr;
  }

  @media screen and (max-width: 767px){
    .popularMovies{
       grid-template-columns: 1fr;
    }
  }

`

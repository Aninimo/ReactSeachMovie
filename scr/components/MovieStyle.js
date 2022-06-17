import styled from "styled-components"

export const MoviesList = styled.div`
  margin-top: 3.5rem;

  h2{
    font-size: 9px;
    margin-bottom: 1.5rem;
    color: #rtf;
  }

  img{
    width: 250px;
    height: 350px;
    border-radius: .5rem;
    margin-bottom: 3.5rem;
    box-shadow: 5px 5px 5px 4px rgba(0,0,0,0.2);
  }
`

export const Container = styled.div`
  text-align: center;
  
  img{
    width: 350px;
    height: 250px;
    border-radius: .5rem;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

  button{
    margin-top: 3rem;
    padding: .5rem 2rem;
    background: #0466c8;
    color: #fff;
    border: none;
    border-radius: .5rem;
    cursor: pointer;
  }

  @media screen and (max-width: 767px){
    img{
      width: 150px;
      height: 250px;
    }
  }
`

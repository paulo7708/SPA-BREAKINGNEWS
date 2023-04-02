import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem;
  /* position: fixed;
  top: 0; */
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ImageLogo = styled.img`
  width: 3rem;
  height: 1,5rem
  object-fit: cover;
  cursor: pointer;
`;

export const Div = styled.div`
  position: relative;
  width: 200px;
  display: flex;
  align-items: center;
`

export const I = styled.i`
  position: absolute;
  top: 1;
  right: 0.2rem;
  z-index: 10;
  border: none;
  background-color: #f5f5f5;
  color: #757575;
  border-radius: 0.3rem;
  padding: 0.5rem;
`
export const Input = styled.input`
  outline: none;
  font-size: 1rem;
  padding: 0.6rem;
  border: none;
  background-color: #f5f5f5;
  color: #757575;
  border-radius: 0.3rem;
  padding: 0.5rem;
   :focus {
      border: 1px solid #0bade3;
    }
`

export const Button = styled.button`
  font-size: 1rem;
  border: none;
  background-color: #0bade3;
  color: #fff;
  border-radius: 0.3rem;
  padding: 0.4rem;
  border: none;
  outline: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Arial, Helvetica, sans-serif;
  width: 10%;
  font-weight: 500;
  letter-spacing: 0.1rem;
  :hover {
    background-color: #0a86af;
  }
`;

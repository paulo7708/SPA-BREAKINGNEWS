import styled from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 100%;

  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border-radius: 0.6rem;
  background-color: #fff;
  padding: 1.5rem;
  margin: 2rem 0.5rem 0 0.5rem;
`;

export const CardBody = styled.article`
  display: flex;
  align-item: center;
  justify-content: center;
  gap: 1rem;

  /* padding: 1rem 1rem 0 1rem; */

  h2 {
    margin-bottom: 1rem;
  }
  img {
    width: 30%;
    object-fit: cover;
    object-position: center;
  }
`;

export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
`;

import styled from 'styled-components';

export const Title = styled.div`
  /* margin-bottom: 1rem; */
  text-align: center;
`;

export const Underline = styled.div`
  width: 10rem;
  height: 0.25rem;
  margin-bottom: 1.25rem;
  background-color: red;
  margin-left: auto;
  margin-right: auto;
`;

export const Center = styled.div`
  margin: auto;
  /* border: 1px solid black; */
  @media screen and (min-width: 992px) {
    width: 90vw;
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-column-gap: 4rem;
    column-gap: 4rem;
  } ;
`;

export const BtnContainer = styled.div`
  display: flex;
  margin-bottom: 4rem;
  flex-wrap: wrap;
  @media screen and (min-width: 992px) {
    flex-direction: column;
    justify-content: flex-start;
  } ;
`;

export const Button = styled.button`
  /* background: transparent;
  border-color: transparent; */
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.25rem 0;
  line-height: 1;
  transition: all 0.3s linear;
  /* outline-color: purple; */
  @media screen and (min-width: 992px) {
    /* box-shadow: -2px 0 red; */
    margin-bottom: 1rem;
  }
`;

export const InfoSection = styled.div`
  display: block;
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const HeaderInfo = styled.h5`
  display: block;
  font-weight: 400;
  letter-spacing: 0.1rem;
  @media screen and (min-width: 800px) {
    line-height: 1;
    font-size: 1.75rem;
  }
`;
export const TagInfo = styled.h6`
  @media screen and (min-width: 800px) {
    line-height: 1;
    font-size: 1rem;
  }
  margin-bottom: 0.75rem;
  text-transform: uppercase;
  color: purple;
  background-color: grey;
  display: inline-block;
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;

export const Date = styled.p`
  letter-spacing: 0.1rem;
  margin-bottom: 1.25rem;
  @media screen and (min-width: 800px) {
    line-height: 1;
    font-size: 1rem;
  } ;
`;

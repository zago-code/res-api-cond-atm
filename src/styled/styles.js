import styled, { css, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, h1 {
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(50, 50, 50);
  }
`;

export const Main = styled.main`
  border-radius: 10px;
  margin: auto;
  margin-top: 0;
  overflow: hidden;
  max-width: 960px;
  border: 1px solid #dee2e6;
  font-size: 0.9rem;
`;

export const Title = styled.header`
  text-align: center;
  background-color: #e9ecef;
  border-bottom: 1px solid #dee2e6;
  padding: 1rem;
`;

export const Container = styled.div`
  padding: 2rem;
`;

const Border = css`
  border-bottom: 1px solid #dee2e6;
  border-top: 1px solid #dee2e6;
  border-collapse: collapse;
`;

export const TableStyles = styled.table`
  padding: 0.75rem;
  text-align: center;
  width: 100%;
  ${Border};
  th,
  td {
    ${Border};
  }

  td {
    font-size: 0.85rem;
  }

  tbody tr:nth-child(odd) {
    background-color: #e9ecef;
    border-spacing: 1rem;
  }
`;

export const ListPages = styled.ul`
  font-size: 1.15rem;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  margin-top: 0;
  margin-bottom: 0;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  a {
    border-color: #ced4da;
    color: #6b88a4;
    font-weight: 700;
    text-decoration: none;
  }
  a:hover {
    background-color: #f4f4f4;
  }
`;

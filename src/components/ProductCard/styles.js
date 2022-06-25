import styled from 'styled-components';


export const ProductCardContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 267px;
  height: 300px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 0 2px 1px rgba(199, 197, 197, 0.739);
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  background-color: white;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 20px 30px 4px rgba(173, 172, 172, 0.808);
    z-index: 1;
  }
`;

export const ProductImage = styled.div`
  border-radius: 8px 8px 0 0;
  background-color: white;
  width: 100%;
  height: 55%;
  border-bottom: 1px solid rgba(204, 203, 203, 0.52);
  overflow: hidden;
  text-align: center;
  img {
    max-width: 100%;
    max-height: 100%;
    box-sizing: content-box;
    transition: all 0.3s;
  }
  img:hover {
    transform: scale(1.1);
  }
`;
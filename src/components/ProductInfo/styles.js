import styled from 'styled-components';

export const ProductInfosContainer = styled.div`
  background-color: white;
  padding: 20px;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 300px;
  border-radius: 0 0 8px 8px;
`;

export const ProductPrice = styled.p`
  color: rgb(46, 45, 45);
  font-weight: 400;
  font-size: 1.6rem;
  background-color: white;
  align-self: flex-start;
`;

export const ProductTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  p {
    color: rgb(46, 45, 45);
    font-weight: 400;
    font-size: 1rem;
    background-color: white;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const ProductFreeShipping = styled.p`
  color: #03a752;
  font-weight: 600;
  font-size: 0.8rem;
`;

export const ButtonCart = styled.button`
  background:#A356FB;
  padding: 4px;
  color: white;
  border: none;
  border-radius: 5px;
  &:hover {
    box-shadow: 0 0 2px 2px gray;
    font-weight: 600;
  }
`;

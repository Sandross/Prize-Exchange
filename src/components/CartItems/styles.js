import styled from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

export const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
  height:100vh;
  right:0;
  width: 400px;
  top: 50px;
  border-radius: 10px;
  position: absolute;
  z-index: 1;
  background: rgba( 163, 86, 251, 0.9 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 12.5px );
  -webkit-backdrop-filter: blur( 12.5px );
  border-radius: 10px;
  border: 1px solid rgba( 255, 255, 255, 0.18 );
  overflow: auto;

h2 {
  margin-top: 8px;
}
* {
  color: white;
}
`;

export const CartItemCard = styled.div`
  display: flex;
  width: 90%;
  height: 80px;
  border: 2px solid  #4d2187;
  border-radius: 8px;
  overflow: hidden;
`;

export const CartItemsPrice = styled.p`
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
`;
export const CartItemsTitle = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
  margin: 0;
  padding: 0;
  margin: 5px;
`;
export const CartItemImage = styled.img`
`;
export const CartItemTools = styled.div`
  min-width: 60px;
  display: flex;
  flex-direction: column;
  div {
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-evenly;
    button {
      background: none;
    }
  }
`;
export const CardRemoveBtn = styled(FaTrashAlt)`
  background-color: #4d2187;
  color: #4d2187;
  border: none;
  margin-top: 5%;
  width: 30px;
  height: 30px;
  border-radius: 5px; 
`;

export const moreLessBtns = styled.button`
  margin-left: 5px;
  margin-right: 5px;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: 800;
  cursor: pointer;
  &:hover {
    color: #4d2187;
  }
`;

export const IconBtn = styled.button`
  background-color: #4d2187;
  border: none;
  color: white;
  width: auto;
  height: auto;
  cursor: pointer;
  &:hover {
    color: #4d2187;
  }
`;

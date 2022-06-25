import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';

export const ProductHeader = styled.header` 
  border: 1px solid #F7F7F7;
  background-color: white;
  height:10vh; 
  width: 100%;
  display: flex;
  align-content: center;
  justify-content:space-around;
`
export const ProductImage = styled.img` 
 width: 5%;
 height: 25px;
 margin-top: 1%;
 filter: brightness(0) saturate(100%) invert(32%) sepia(70%) saturate(5991%) hue-rotate(258deg) brightness(102%) contrast(96%);
`
export const cartIcon = styled(FaCartPlus)`
 width: 25px;
 height: 25px;
 margin-top: 1.2%;
 filter: brightness(0) saturate(100%) invert(32%) sepia(70%) saturate(5991%) hue-rotate(258deg) brightness(102%) contrast(96%);
`

export const UserLogged = styled.h4`
margin-top: 6.5%;
`
export const CartContainer = styled.div`
text-align: center;
height:100vh;
width: 300px;
/* margin-left: 600px; */
border-radius: 10px;
z-index: 1;
background-color: #1C1C1C;
`

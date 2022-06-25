import styled from 'styled-components';
import { FaCartPlus } from 'react-icons/fa';

export const ProductHeader = styled.header` 
  border: 1px solid #F7F7F7;
  background-color: white;
  height:10vh; 
  width: 100%;
  display: flex;
  align-content: center;
  align-items:center;
  justify-content:space-around;
`

export const ProductImage = styled.img` 
 width: 5%;
 height: 25px;
 filter: brightness(0) saturate(100%) invert(32%) sepia(70%) saturate(5991%) hue-rotate(258deg) brightness(102%) contrast(96%);
`

export const cartIcon = styled(FaCartPlus)`
 width: 25px;
 height: 25px;
 position: relative;
 filter: brightness(0) saturate(100%) invert(32%) sepia(70%) saturate(5991%) hue-rotate(258deg) brightness(102%) contrast(96%);
`

export const carIconBtn = styled.button `
  background: none;
  border: none;
`

export const userPrice = styled.h3`
font-size: 30px;
color: white;
`
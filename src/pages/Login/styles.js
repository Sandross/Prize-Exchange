import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width:100%;
  height:100vh;
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  background-color: white;
  background-image: url(https://wallpapercave.com/wp/wp3173151.jpg);
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
`;

export const SecondProduct = styled.div`
 width: 400px;
 height: 350px;
 margin-top: 25vh;
 /* margin-right: 10vh; */
 border-radius: 3vh;
background-color:#1C1C1C;
border: 2px solid black;
`;

export const Productbuttom = styled.button`
  appearance: none;
  background-color: #A356FB;
  border: 1px solid rgba(27, 31, 35, .15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, .1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-family: -apple-system,system-ui,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji";
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  margin-top:35px;
  margin-bottom: 10px;
`
export const ProductTitle = styled.h2`
text-align: center;
margin-top:18%;
margin-bottom: 8%;
`
export const ProductForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
position: relative;
`

export const ProductInput = styled.input`
margin-top:10px
`
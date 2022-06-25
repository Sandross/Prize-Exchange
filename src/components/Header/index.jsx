import React, {useEffect, useState} from 'react'
import { getLocalStorage } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import { openCart } from '../../store/reducers'
import CartItems from "../CartItems"

export default function Header() {
const [email, setEmail] = useState('');
const dispatch = useDispatch();
const { isCartOpen } = useSelector((state) => state?.radarFit);
useEffect(() => {
  const user = getLocalStorage('user');
  user?.email && setEmail(user.email)
}, []);

  return (
    <S.ProductHeader>
      <S.ProductImage alt="radarfitLogo"src="https://i0.wp.com/radarfit.com.br/wp-content/uploads/2022/02/radarfit-full-white.png?fit=5764%2C1546&ssl=1"/>
      <nav>
       <h4 >
      { `Logado como ${email}` }        
       </h4>
      </nav>
      <S.carIconBtn onClick={() => {
        isCartOpen === false?
        dispatch(openCart(true))
      :dispatch(openCart(false))
      }}>
       <S.cartIcon/>
       </S.carIconBtn>
       {isCartOpen && <CartItems/>}
    </S.ProductHeader>
  )
}

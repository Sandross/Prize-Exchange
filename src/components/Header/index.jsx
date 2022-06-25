import React, {useEffect, useState} from 'react'
import { getLocalStorage } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import { openCart } from '../../store/reducers';

export default function Header() {
const [email, setEmail] = useState('');
const dispatch = useDispatch();
const { isCartOpen } = useSelector((state) => state.radarFit);
console.log(isCartOpen)
useEffect(() => {
  const user = getLocalStorage('user');
  user?.email && setEmail(user.email)
}, []);
  return (
    <S.ProductHeader>
      <S.ProductImage alt="radarfitLogo"src="https://i0.wp.com/radarfit.com.br/wp-content/uploads/2022/02/radarfit-full-white.png?fit=5764%2C1546&ssl=1"/>
      <nav>
       <S.UserLogged >
      { `Logado como ${email}` }        
       </S.UserLogged>
      </nav>
      <button onClick={() => dispatch(openCart(true))}>
       <S.cartIcon/>
       </button>
    </S.ProductHeader>
  )
}

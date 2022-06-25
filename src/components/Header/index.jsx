import React, {useEffect, useState} from 'react'
import { getLocalStorage } from '../../utils';
import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import { openCart } from '../../store/reducers';
import { addItens } from '../../store/reducers'

export default function Header() {
const [email, setEmail] = useState('');
const dispatch = useDispatch();
const { isCartOpen, cartItens } = useSelector((state) => state?.radarFit);
useEffect(() => {
  const user = getLocalStorage('user');
  user?.email && setEmail(user.email)
}, []);

const removeFromCart = (id) => {
  const newItems = cartItens.filter((elem) => elem.id !== id);
  dispatch(addItens( newItems ));
}
  return (
    <S.ProductHeader>
      <S.ProductImage alt="radarfitLogo"src="https://i0.wp.com/radarfit.com.br/wp-content/uploads/2022/02/radarfit-full-white.png?fit=5764%2C1546&ssl=1"/>
      <nav>
       <S.UserLogged >
      { `Logado como ${email}` }        
       </S.UserLogged>
      </nav>
      <button onClick={() => {
        isCartOpen === false?
        dispatch(openCart(true))
      :dispatch(openCart(false))
      }}>
       <S.cartIcon/>
       </button>
       {isCartOpen && <S.CartContainer> {cartItens.map((elem) => {
          return (
            <div key={elem.id}>
              <img src={elem.thumbnail} alt={elem.title}/>
              <h2>{elem.title}</h2>
             <h3>{`R$ ${elem.price}`}</h3>
             <button onClick={removeFromCart(elem.id)}>Remover do carrinho</button>
            </div>
          )
       })}
       </S.CartContainer>}
    </S.ProductHeader>
  )
}

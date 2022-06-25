import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem, updateTotal, decrementQty, incrementQty,
} from '../../store/reducers';
import * as S from './styles';

export default function CartItems() {
  const { cartItems, total } = useSelector((state) => state?.radarFit);
  const dispatch = useDispatch();

  return (
    <S.CartItemsContainer>

      <h2>{`Total: ${total.toFixed(2)}`}</h2>

      {
        cartItems?.map((elem) => (
          <S.CartItemCard key={Math.random()}>

            <S.CartItemImage src={elem.thumbnail} alt={elem.title} />

            <S.CartItemsTitle>{elem.title}</S.CartItemsTitle>

            <S.CartItemTools>
              <S.CartItemsPrice>{elem.price && `R$ ${(elem.price * elem.qty).toFixed(2)}`}</S.CartItemsPrice>
              <div>
                <S.moreLessBtns onClick={() => {
                  dispatch(decrementQty(elem));
                  dispatch(updateTotal());
                }}
                >
                  {' '}
                  -
                </S.moreLessBtns>
                <p>{elem.qty}</p>
                <S.moreLessBtns onClick={() => {
                  dispatch(incrementQty(elem));
                  dispatch(updateTotal());
                }}
                >
                  {' '}
                  +
                </S.moreLessBtns>
              </div>
            </S.CartItemTools>
            <S.IconBtn onClick={() => {
              dispatch(removeItem(elem?.id));
              dispatch(updateTotal());
            }}
            >
              <S.CardRemoveBtn />
            </S.IconBtn>
          </S.CartItemCard>
        ))
}

      {!cartItems.length && <h3>Carrinho vazio</h3>}
    </S.CartItemsContainer>
  );
}

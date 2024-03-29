import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItem, updateTotal, decrementQty, incrementQty,
  finishBuy,
} from '../../store/reducers';
import * as S from './styles';

export default function CartItems() {
  const { cartItems, total, wallet } = useSelector((state) => state?.radarFit);
  const dispatch = useDispatch();

  return (
    <S.CartItemsContainer>

      <h2>{`Total RadarFit$: ${total.toFixed(2)}`}</h2>

      {
        cartItems?.map((elem) => (
          <S.CartItemCard key={Math.random()}>

            <S.CartItemImage src={elem.thumbnail} alt={elem.title} />

            <S.CartItemsTitle>{elem.title}</S.CartItemsTitle>

            <S.CartItemTools>
              <S.CartItemsPrice>{elem.price && `RadarFit$ ${(elem.price * elem.qty).toFixed(2)}`}</S.CartItemsPrice>
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
      <S.IconBtn
        type="button"
        onClick={() => {
          if (wallet > 0) dispatch(finishBuy(total.toFixed(2)));
          else if (wallet <= 0 || total > wallet) alert('Você não tem saldo suficiente!');
          dispatch(updateTotal());
        }}
      >
        Finalizar compra

      </S.IconBtn>
      {!cartItems.length && <h3>Carrinho vazio</h3>}
    </S.CartItemsContainer>
  );
}

import React from 'react';
import * as S from './styles';

const ProductInfo = ({ price, shipping, title }) => {
  return (
    <S.ProductInfosContainer>
      <S.ProductPrice>
        {price?.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </S.ProductPrice>
      {shipping && <S.ProductFreeShipping>Frete grátis</S.ProductFreeShipping>}
      <S.ProductTitle>
        <p>{title}</p>
      </S.ProductTitle>
      <S.ButtonCart>Adicionar ao Carrinho</S.ButtonCart>
    </S.ProductInfosContainer>
  );
};

export default ProductInfo;
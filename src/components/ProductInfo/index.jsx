import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as S from './styles';
import { addItems, updateTotal } from '../../store/reducers';

function ProductInfo({
  price, shipping, title, thumbnail, id,
}) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItems({
      id,
      title,
      price,
      thumbnail,
    }));
    dispatch(updateTotal());
  };
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
      <S.ButtonCart onClick={() => addToCart(
        id,
        title,
        price,
        thumbnail,
      )}
      >
        Adicionar ao Carrinho

      </S.ButtonCart>
    </S.ProductInfosContainer>
  );
}

ProductInfo.propTypes = {
  price: PropTypes.number.isRequired,
  shipping: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductInfo;

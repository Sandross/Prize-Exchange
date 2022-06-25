import { useSelector, useDispatch } from 'react-redux';
import * as S from './styles';
import { addItens } from '../../store/reducers'

const ProductInfo = ({ price, shipping, title, thumbnail, id }) => {
  const dispatch = useDispatch();
  const addToCart = (id, title, price, thumbnail) => {
    dispatch(addItens({
      id,
      title,
      price,
      thumbnail,
    }));
  }
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
      <S.ButtonCart onClick={() => addToCart(id, title, price, thumbnail)}>Adicionar ao Carrinho</S.ButtonCart>
    </S.ProductInfosContainer>
  );
};

export default ProductInfo;
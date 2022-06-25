import React from 'react';
import * as S from './styles';
import ProductInfo from '../ProductInfo/index';

export default function ProductCard ({ title, price, thumbnail, shipping, id  })  
{
    return (
      <div>
        <S.ProductCardContainer>
          <S.ProductImage>
            <img src={thumbnail.replace('I.jpg', 'J.jpg')} alt={title} />
          </S.ProductImage>
           <ProductInfo 
            price={price}
            title={title}
            thumbnail={thumbnail}
            shipping={shipping.free_shipping} 
            id={id}
           /> 
        </S.ProductCardContainer>
        </div>
    );
};
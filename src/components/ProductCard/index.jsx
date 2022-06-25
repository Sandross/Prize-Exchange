import React from 'react';
import * as S from './styles';
import ProductInfo from '../ProductInfo/index';

export default function ProductCard ({ title, price, thumbnail, shipping, _id  })  
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
            shipping={shipping.free_shipping} 
           /> 
        </S.ProductCardContainer>
        </div>
    );
};
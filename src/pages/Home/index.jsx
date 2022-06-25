/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
// import { addItems } from '../../store/reducers';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import * as S from './styles';

export default function Home() {
  const { products } = useSelector((state) => state.radarFit);
  return (
    <>
      <Header />
      <S.DivContainer>
        { products.map((product) => (<ProductCard key={product.id} {...product} />))}
      </S.DivContainer>
    </>
  );
}

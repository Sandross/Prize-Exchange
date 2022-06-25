import React from 'react';
import { useSelector } from 'react-redux';
// import { addItens } from '../../store/reducers';
import ProductCard from '../../components/ProductCard';
import  Header  from '../../components/Header';
import * as S from './styles';

export default function Home() {
  const { products } = useSelector((state) => state.radarFit);
  // const dispatch = useDispatch();
  console.log(products);
  return (
    <>
   <Header/>
    <S.DivContainer>
    { products.map(product => (<ProductCard key={product.id}{...product} />) )}
      {/* <button onClick={() => dispatch( addItens({
        name: 'cassius',
        id: 171,
        price: 0,
      }))}></button> */}
    </S.DivContainer>
    </>
  )
}
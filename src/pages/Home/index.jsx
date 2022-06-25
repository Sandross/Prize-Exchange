import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItens } from '../../store/reducers'
import ProductCard from '../../components/ProductCard';
import  Header  from '../../components/Header'

export default function Home() {
  const { products } = useSelector((state) => state.radarFit)
  const dispatch = useDispatch();
  return (
    <>
   <Header/>
    <div>
    { products.map(product => (<ProductCard key={product.id}{...product} />) )}
      <button onClick={() => dispatch( addItens({
        name: 'cassius',
        id: 171,
        price: 0,
      }))}></button>
    </div>
    </>
  )
}
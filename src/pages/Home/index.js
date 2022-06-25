import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addItens } from '../../store/reducers'


export default function Home() {
  const { cartItens } = useSelector((state) => state.radarFit)
  console.log(cartItens)
  const dispatch = useDispatch();
  return (
    <div>
      <h1> ESTOU NA STORE </h1>
      <button onClick={() => dispatch( addItens({
        name: 'cassius',
        id: 171,
        price: 0,
      }))}></button>
    </div>
  )
}
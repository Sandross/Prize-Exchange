import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { schema } from './validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { saveOnLocalStorage } from '../../utils'
import * as S from './styles';


export default function Login() {
  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  return (
    <S.ProductCardContainer>
      <S.SecondProduct>
        <S.ProductTitle>Login</S.ProductTitle>
        <S.ProductForm
        onSubmit={ handleSubmit((data) => 
         { console.log(data)
           saveOnLocalStorage('user',data)
            navigate('/home')})}
        >
          <div>
            <S.ProductInput
              data-testid="email-input"
              type="email"
              placeholder="Email"
              {
              ...register('email')
              }
            />
            <br/>
            <S.ProductInput
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              {
                ...register('password')
              }
            />
          </div>
          <S.Productbuttom
            data-testid="login-submit-btn"
            type="submit"
          >
            Entrar

          </S.Productbuttom>
          {errors.email && <p>{errors.email.message}</p>}
        { errors.password && <p>{errors.password.message}</p>}
        </S.ProductForm>
      </S.SecondProduct>
    </S.ProductCardContainer>
  );
}
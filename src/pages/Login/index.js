import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { schema } from './validation'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Login() {
  const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
  });
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h2>Login</h2>
        {errors.email && <p>{errors.email.message}</p>}
        { errors.password && <p>{errors.password.message}</p>}
        <form
        onSubmit={ handleSubmit((data) => 
            navigate('/home'))}
        >
          <div>
            <input
              data-testid="email-input"
              type="email"
              placeholder="Email"
              {
              ...register('email')
              }
            />
            <input
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              {
                ...register('password')
              }
            />
          </div>
          <button
            data-testid="login-submit-btn"
            type="submit"
          >
            Entrar

          </button>
        </form>
      </div>
    </div>
  );
}
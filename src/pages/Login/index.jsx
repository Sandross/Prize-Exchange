import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { schema } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { saveOnLocalStorage } from "../../utils";
import * as S from "./styles";

export default function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  return (
    <S.ProductCardContainer>
      <S.FormLoginContainer>
        <S.ProductTitle>Login</S.ProductTitle>
        <S.ProductForm
          onSubmit={handleSubmit((data) => {
            saveOnLocalStorage("user", data);
            navigate("/home");
          })}
        >
          <S.LoginInput
            data-testid="email-input"
            type="email"
            placeholder="Email"
            {...register("email")}
          />
          <S.LoginInput
            data-testid="password-input"
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          <S.Loginbuttom data-testid="login-submit-btn" type="submit">
            Entrar
          </S.Loginbuttom>
          {errors.email && <p>{errors.email.message}</p>}
          {errors.password && <p>{errors.password.message}</p>}
        </S.ProductForm>
      </S.FormLoginContainer>
    </S.ProductCardContainer>
  );
}

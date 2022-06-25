import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email('O Email deve ter um formato válido').required('Email Obrigatório!'),
  password: yup.string().required('Por favor, insira a senha').min(6, ' A Senha precisa ter no mínimo 6 caracteres'),
});

export default schema;

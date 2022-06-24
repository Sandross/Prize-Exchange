import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { saveInfo } from '../actions';

function Login() {
  const [userEmail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const history = useHistory();

  const emailValidation = () => {
    const MIN_LENGTH = 6;
    const emailCheck = /^.*@.*\.com$/.test(userEmail);
    const passwordCheck = password.length >= MIN_LENGTH;
    if (emailCheck && passwordCheck) {
      setIsDisabled(false);
      return;
    }
    setIsDisabled(true);
  };

  return (
    <div>
      <div>
        {/* <img /> */}

        <h2>Login</h2>
        <form>
          <div>
            <input
              data-testid="email-input"
              type="email"
              placeholder="Email"
              value={ userEmail }
              onChange={ (e) => {
                setEmail(e.target.value);
                emailValidation();
              } }
            />
            <input
              data-testid="password-input"
              type="password"
              placeholder="Senha"
              value={ password }
              onChange={ (e) => {
                setPassword(e.target.value);
                emailValidation();
              } }
            />
          </div>
          <button
            data-testid="login-submit-btn"
            type="button"
            disabled={ isDisabled }
            onClick={ () => {
              const { email } = this.props
              history.push('/store');
              email(userEmail);
            }}
          >
            Entrar

          </button>
        </form>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    email: (state) => dispatch(saveInfo(state)),
  });
  

export default connect(null, mapDispatchToProps)(Login);
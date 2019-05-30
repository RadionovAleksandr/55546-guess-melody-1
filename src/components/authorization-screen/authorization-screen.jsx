import React from "react";

import {connect} from "react-redux";
import propTypes from "prop-types";

import {Operation} from "../../reducer/user/user";

class AuthorizationScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this._loginField = React.createRef();
    this._passwordField = React.createRef();
    this._errorLogin = React.createRef();
    this._errorPassword = React.createRef();

    this.checkDataSignIn = this.checkDataSignIn.bind(this);
  }

  checkDataSignIn(email, password, errorBlocks) {
    if (!email) {
      errorBlocks.email.innerHTML = `Не корректный логин!`;
      errorBlocks.login.style.display = `block`;
    } else if (!password) {
      errorBlocks.password.innerHTML = `Не корректный пароль!`;
      errorBlocks.password.style.display = `block`;
    } else {
      this.props.signIn({email, password});
    }
  }

  render() {
    const {
      _loginField,
      _passwordField,
      _errorLogin,
      _errorPassword,
      checkDataSignIn
    } = this;

    return <section className="login" style={{zIndex: 999, marginTop: `-200px`}}>
      <div className="login__logo">
        <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
      </div>
      <h2 className="login__title">Необходима авторизация</h2>
      <p className="login__text">Представтесь!</p>
      <form className="login__form" action="">
        <p className="login__field">
          <label className="login__label" htmlFor="name">Логин</label>
          <input ref={this._loginField} className="login__input" type="text" name="name" id="name" />
          <span ref={this._errorLogin} className="login__error">Неверный логин</span>
        </p>
        <p className="login__field">
          <label className="login__label" htmlFor="password">Пароль</label>
          <input ref={this._passwordField} className="login__input" type="text" name="password" id="password" />
          <span ref={this._errorPassword} className="login__error">Неверный пароль</span>
        </p>
        <button className="login__button button" type="submit" onClick={(evt) => {
          evt.preventDefault();
          if (_loginField && _passwordField) {
            checkDataSignIn(
                _loginField.current.value,
                _passwordField.current.value, {
                  login: _errorLogin.current,
                  password: _errorPassword.current,
                });
          }
        }}>Войти</button>
      </form>
    </section>;
  }
}

AuthorizationScreen.propTypes = {
  signIn: propTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps);

const mapDispatchToProps = (dispatch) => ({
  signIn: (data) => {
    dispatch(Operation.signIn(data));
  },
});

export {AuthorizationScreen};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationScreen);

import cn from 'classnames';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { loginAction } from '../../store/api-actions';
import styles from './login-form.module.css';

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const isValidPassword = (password: string) => /^(?=.*[A-Za-z])(?=.*\d).+$/.test(password);


function LoginForm(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const dispatch = useAppDispatch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(loginAction({
      login: email,
      password: password
    }));
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);

    if (!isValidEmail(event.target.value)) {
      setEmailError('Please enter a valid email address');

    } else { setEmailError(''); }

  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);

    if (!isValidPassword(event.target.value)) {
      setPasswordError('Please enter a password with at least one letter and number');

    } else { setPasswordError(''); }

  };

  return (

    <form className="login__form form" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className={cn('login__input form__input', { [styles.input__error]: emailError })}
          type="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <span className={styles.error}>{emailError}</span>}
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className={cn('login__input form__input', { [styles.input__error]: passwordError })}
          type="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        />
        {passwordError && <span className={styles.error}>{passwordError}</span>}
      </div>
      <button className="login__submit form__submit button" type="submit">
        Sign in
      </button>
    </form>

  );
}

export default LoginForm;

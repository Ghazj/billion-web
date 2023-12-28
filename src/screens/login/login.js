import { useNavigate } from "react-router-dom";
import Input from '../../components/input/input';

import useUser from "../../hooks/useUser";
import { useEffect, useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [userState, setuserState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  const {isLogged, login, jwt} = useUser();

  const regularExpressions = {
    user: /^[a-zA-Z0-9\\]{4,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{4,12}$/, // 4 a 12 digitos.

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    documento: /^\d{1,8}$/, // 7 a 14 numeros.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10,11}$/ // 7 a 14 numeros.
  }

  useEffect(() => {
    if (isLogged === true) navigate('/customerDashboard');
  }, [isLogged, navigate])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userState, passwordState);
    login(userState, passwordState);
    console.log("Token: ", jwt);
  }

  return (
    <div className='Login'>
      Login
      <form onSubmit={handleSubmit}>
        <Input id='name' label='User:' handleChange={(e) => setuserState(e.target.value)} type='text' placeholder='Ingresa tu usario' error='El usuario ingresado no es válido' regularExpression={regularExpressions.user} />

        <Input id='password' label='Password:' handleChange={(e) => setPasswordState(e.target.value)} type='text' placeholder='Ingresa tu password ' error='El password ingresado no es válido' regularExpression={regularExpressions.password} />

        <button type='submit'>Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Login;
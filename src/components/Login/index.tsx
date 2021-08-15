import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useUser } from "../../hooks/User/useUser";
import { userCredentials } from "../../models/loginModel";

import { LoginForm } from "./LoginForm";

export const Login = ({ onLogin }: any) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState<userCredentials>({
    email: "eve.holt@reqres.in",
    password: "cityslicka"
  });

  const { login, isLogged, loadingUser, errorLogin } = useUser();

  useEffect(() => {
    if (isLogged) history.push("/usuarios");
    onLogin && onLogin();
  }, [isLogged, history, onLogin]);

  const handleInputChange = (event: any) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    login({
      email: credentials.email,
      password: credentials.password
    });
  };

  return (
    <>
      {loadingUser && <strong>Checking credentials...</strong>}
      <div className="container mt-5">
        <h1 className="flex">Inicio de sesión</h1>
        <hr />
        <h4>
          A continuación ingrese sus credenciales para el inicio de sesión.
        </h4>
        <LoginForm onSubmit={onSubmit} handleInputChange={handleInputChange} />
      </div>
      {errorLogin && <strong>Credentials are invalid</strong>}
    </>
  );
};

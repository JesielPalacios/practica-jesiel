import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { useUser } from "../../hooks/User/useUser";
import { userProperties } from "../../models/loginModel";

import { UserForm } from "./UserForm";

export const CreateUser = ({ onLogin }: any) => {
  const history = useHistory();
  const [credentials, setCredentials] = useState<userProperties>({
    name: "Jesiel",
    job: "Software developer"
    // name: "",
    // job: ""
  });

  const { createUser, isLogged, loadingUser, errorLogin } = useUser();

  useEffect(() => {
    if (!isLogged) history.push("/login");
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
    createUser({
      name: credentials.name,
      job: credentials.job
    });
    // history.push("/usuarios");
  };

  return (
    <>
      {loadingUser && <strong>Loading data...</strong>}
      <div className="container mt-5">
        <h1 className="flex">Crear nuevo usuario</h1>
        <hr />
        <h4>
          A continuación ingrese los datos para la creación de un nuevo usuario.
        </h4>
        <UserForm onSubmit={onSubmit} handleInputChange={handleInputChange} />
      </div>
      {errorLogin && (
          <strong>
            Lo sentimos, hubieron errores revisando tus credenciales, por favor
            inicia sección e intenta nuevamente.
          </strong>
        ) && (
          <Link to="/login">
            <button className="btn btn-outline-primary">
              Ir a la página principal
            </button>
          </Link>
        )}
    </>
  );
};

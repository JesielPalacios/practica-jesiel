import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../hooks/User/useUser";
import "../../css/Users.css";

export const Users = ({ onLogin }: any) => {
  const history = useHistory();
  const { isLogged, users, getUsers } = useUser();
  // console.log(users);

  let page: number = 1;

  useEffect(() => {
    if (!isLogged) history.push("/login");
    onLogin && onLogin();
    getUsers(page);
  }, [isLogged, history, onLogin, getUsers, page]);

  const changePage = (newPage: any) => {
    page = newPage;
    getUsers(page);
  };

  return (
    <div className="container mt-5">
      <h1 className="flex">Usuarios</h1>
      <h4>
        A continuación se listan todos los usuarios.{" "}
        <Link
          to="/crear"
          className="button muted-button btn btn-outline-primary"
        >
          Agregar usuario
        </Link>{" "}
        <Link
          to="usuarios"
          className="button muted-button btn btn-outline-primary"
          onClick={() => {
            changePage(page);
          }}
        >
          Actualizar lista
        </Link>
      </h4>

      <div className="flex">
        {users.length &&
          users.map((user: any) => {
            return (
              <div key={user.id} className="mt-5">
                <p>
                  <strong>{user.first_name}</strong>
                </p>
                <p>{user.email}</p>
                <img key={user.avatar} src={user.avatar} alt={user.avatar} />
              </div>
            );
          })}
      </div>

      <div className="flex">
        <Link
          to="/usuarios"
          className="button muted-button btn btn-outline-primary space"
          onClick={() => changePage(1)}
        >
          1
        </Link>
        <Link
          to="/usuarios"
          className="button muted-button btn btn-outline-primary space"
          onClick={() => changePage(2)}
        >
          2
        </Link>
      </div>
    </div>
  );
};

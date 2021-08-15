import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUser } from "../../hooks/User/useUser";

export const Sidebar = ({ onLogin }: any) => {
  const history = useHistory();

  const { isLogged, logout } = useUser();

  useEffect(() => {
    if (!isLogged) history.push("/login");
    onLogin && onLogin();
  }, [isLogged, history, onLogin]);

  const handleClick = (e: any) => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({ isLogged }: any) => {
    return isLogged ? (
      <>
        <Link to="usuarios" className="d-block text-light p-3 border-0">
          <i className="icon ion-md-people lead mr-2"></i>
          Usuarios
        </Link>
        <Link to="/crear" className="d-block text-light p-3 border-0">
          <i className="icon ion-md-person-add lead mr-2"></i>
          Agregar nuevo usuario
        </Link>
        <Link
          to="/login"
          className="d-block text-light p-3 border-0"
          onClick={handleClick}
        >
          {" "}
          <i className="icon ion-md-log-out lead mr-2"></i>
          Cerrar sesión
        </Link>
      </>
    ) : (
      <>
        <Link to="/login" className="d-block text-light p-3 border-0">
          {" "}
          <i className="icon ion-md-log-in lead mr-2"></i>
          Iniciar sesión
        </Link>
      </>
    );
  };
  return (
    <div id="sidebar-container" className="bg-primary">
      <div className="logo">
        <h4 className="text-light font-weight-bold mb-0">REQRES.IN S.A.</h4>
      </div>
      <div className="menu">{renderLoginButtons({ isLogged })}</div>
    </div>
  );
};

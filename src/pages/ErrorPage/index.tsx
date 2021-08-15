import { Link,  } from "react-router-dom";

export const ErrorPage = ({ onLogin }: any) => {

  return (
    <div className="container mt-5">
      <h3 className="flex">Ruta no encontrada</h3>
      <p>
        <span>
          A continuación puede dirigirse al sitio principal para conocer mejor
          lo que necesita:
          <br />
          <br />
          <br />
          <Link to="/login">
            <button className="btn btn-outline-primary">
              Ir a la página principal
            </button>
          </Link>
        </span>
      </p>
    </div>
  );
}

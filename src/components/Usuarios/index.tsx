import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useUsuario } from "../../hooks/User/useUsuario";
import "../../css/Usuarios.css";

export default function Usuarios({onLogin}: any) {

  const history = useHistory();
  const {
    estaLogueado,
    usuarios,
    eliminarUsuario,
    obtenerUsuarios,
  } = useUsuario();
  console.log(usuarios);

  useEffect(() => {
    if (!estaLogueado)
    history.push('/taller-vehicular');
    onLogin && onLogin()
    obtenerUsuarios()
  }, [estaLogueado, history, onLogin, obtenerUsuarios])

  // function capitalizarPrimeraLetra(cadena: string) {
  //   return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  // }
  function capitalizarPrimeraLetra(cadena: string) {
    //split the above string into an array of strings
    //whenever a blank space is encountered
    const arr = cadena.split(' ');
    //loop through each element of the array and capitalize the first letter
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  //Join all the elements of the array back into a string
  //using a blankspace as a separator
  return arr.join(" ");
  }

  return (
    <div className="container mt-5">
      <h1>Usuarios</h1>
      <h4>
        A continuación una lista de todos los usuarios.
        <Link
          to="/agregar-usuario"
          className="button muted-button btn btn-outline-primary btn-block"
        >
          Agregar usuario
        </Link>{" "}
        <Link
          to="usuarios"
          className="button muted-button btn btn-outline-primary btn-block"
          onClick={() => {
            obtenerUsuarios()
          }}
        >
          Actualizar lista
        </Link>
      </h4>
      <table className="table">
          <thead className="thead-dark">
              <tr>
                  <th scope="col">Numero de identificación</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Rol</th>
                  <th scope="col">Acciones</th>
              </tr>
          </thead>
          <tbody>
            {usuarios.length
              ? usuarios.map((usuario: any) => (
                <tr key={usuario.numeroIdentificacion}>
                  <td>
                    <Link
                      to={`/usuario/${usuario.numeroIdentificacion}`}
                      className={'enlace'}
                      // onClick={() => obtenerUsuario(usuario.numeroIdentificacion)}
                    >
                      {usuario.numeroIdentificacion}
                    </Link>
                  </td>
                  <td>
                    {capitalizarPrimeraLetra(usuario.nombre)}
                  </td>
                  <td>
                    {usuario.rol}
                  </td>
                  <td>
                    <Link
                      to={`/editar/${usuario.numeroIdentificacion}`}
                      className="button muted-button btn btn-outline-success btn-block"
                    >
                      Editar
                    </Link>{' '}
                    <Link
                      to='/usuarios'
                      className="button muted-button btn btn-outline-danger btn-block"
                      onClick={() => {
                        eliminarUsuario(usuario.numeroIdentificacion)
                        obtenerUsuarios()
                      }}
                    >
                      Eliminar
                    </Link>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan={3}>No hay usuarios</td>
                </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}
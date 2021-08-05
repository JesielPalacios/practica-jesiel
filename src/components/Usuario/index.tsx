import { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { useUsuario } from '../../hooks/User/useUsuario';

export default function Usuario({onLogin}: any) {

  const history = useHistory();
  const { estaLogueado, obtenerUsuario, usuario } = useUsuario();
  console.log(usuario);

  const {id}:any = useParams();

  useEffect(() => {

    if (!estaLogueado) history.push('/taller-vehicular');
    onLogin && onLogin()
    obtenerUsuario(id)

  }, [estaLogueado, history, onLogin, obtenerUsuario, id])

  return (
    <div className="container mt-5">
      <div className="card text-dark bg-light mb-3">
        {usuario ? <>
          <div className="card-header"><b>Usuario de tipo:</b> {usuario.rol}</div>
          <div className="card-body">
            <h5 className="card-title"><b>Número de identificación:</b> {usuario.numeroIdentificacion}</h5>
            <p className="card-text"><b>Nombres:</b> {usuario.nombre}</p>
            <p className="card-text"><b>Apellidos:</b> {usuario.apellido}</p>
            <p className="card-text"><b>Número telefónico:</b> {usuario.numeroTelefono}</p>
            <p className="card-text"><b>Domicilio / dirección:</b> {usuario.domicilio}</p>
            <p className="card-text"><b>Correo electrónico:</b> {usuario.correo}</p>
            <p className="card-text"><b>Número de identificación:</b>{usuario.numeroIdentificacion}</p>
            <p className="card-text"><b>Número de identificación:</b> {usuario.numeroIdentificacion}</p>
          </div>
        </>
      : <> <div className="card-header"><b>Lo sentimos</b></div>
            <div className="card-body">
              <h5 className="card-title"><b>Detalles del problema:</b></h5>
              <p className="card-text">No hay datos del usuario seleccionado. En breve nos pondremos en contacto con el equipo de TI para solucionarlo.</p>
            </div>
          </>
        }
        <Link to="/usuarios" className="btn btn-outline-danger">Regresar</Link>
      </div>
    </div>
  )
}
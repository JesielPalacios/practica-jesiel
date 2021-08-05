import { useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import { useUsuario } from '../../hooks/User/useUsuario';
import { Formulario } from './Formulario';

export default function EditarUsuario({onLogin}: any) {

  const history = useHistory();
  const {
    estaLogueado,
    obtenerUsuario,
    usuario,
    editando
  } = useUsuario();
  console.log(usuario);

  const {id}:any = useParams();

  useEffect(() => {

    if (!estaLogueado) history.push('/taller-vehicular');
    onLogin && onLogin()
    obtenerUsuario(id)

  }, [estaLogueado, history, onLogin, obtenerUsuario, id])

  return (
    <div className="container mt-5">
      <h1>Editar usuario</h1>
      <hr />
      <h4>A continuación se encuentran los datos del usuario {usuario.nombre} con número de identificación {id}</h4>
      <Formulario
        // onSubmit={onSubmit}
        usuario={usuario}
        editando={editando}
      />
    </div>
  )
}

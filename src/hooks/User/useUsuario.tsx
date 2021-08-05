import { useCallback, useContext, useState } from "react"
import Context from "../../context/ContextoUsuario"
import loginService from '../../services/login'
import obtenerUsuariosServicio from '../../services/obtenerUsuarios'
import obtenerUnUsuarioServicio from '../../services/obtenerUnusuario'
import eliminarUsuarioServicio from '../../services/eliminarUsuario'

export const useUsuario = () =>{

  const {
    jwt,
    setJWT,
    usuarios,
    setUsuarios,
    usuario,
    setUsuario,
    editando,
    setEditando
  } = useContext<any>(Context)
  const [state, setState] = useState({ loading: false, error: false })

  const login = useCallback(({correo, contrasena}) => {
    setState({loading: true, error: false })
    loginService({correo, contrasena})
      .then(jwt => {
        localStorage.setItem('jwt', jwt)
        setState({loading: false, error: false })
        setJWT(jwt)
      })
      .catch(err => {
        localStorage.removeItem('jwt')
        setState({loading: false, error: true })
        console.error(err)
      })
  }, [setJWT])

  const logout = useCallback(() => {
    localStorage.removeItem('jwt')
      setJWT(null)
  }, [setJWT])

  const obtenerUsuarios = useCallback(()=> {
    if (!jwt) return setUsuarios([])
    obtenerUsuariosServicio({jwt}).then(setUsuarios)
      .catch(err => {
        console.error(err)
      })
  }, [jwt, setUsuarios])

  const obtenerUsuario = useCallback(numeroIdentificacion => {
    // if (!jwt) return setUsuarios([])
    obtenerUnUsuarioServicio({jwt, numeroIdentificacion}).then(setUsuario)
      .catch(err => {
        console.error(err)
      })
  }, [jwt, setUsuario])

  const eliminarUsuario = useCallback( numeroIdentificacion => {
    // (token: any) => localStorage.getItem('jwt')
    // if (!jwt) return setUsuarios([])
    eliminarUsuarioServicio({jwt, numeroIdentificacion})
    .catch(err => {
      console.error(err)
    })
  }, [jwt])

  return {
    estaLogueado: Boolean(jwt),
    cargandoUsuario: state.loading,
    errorLogin: state.error,
    login,
    logout,
    usuarios,
    obtenerUsuarios,
    usuario,
    obtenerUsuario,
    eliminarUsuario,
    editando,
    setEditando
  }
}
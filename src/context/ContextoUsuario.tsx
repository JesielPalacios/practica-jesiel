import { createContext, useState } from 'react'

export const Context = createContext({})

export const ProveedorContextoUsuario: React.FC = ({ children }) => {

  const [usuarios, setUsuarios] = useState([])
  const [usuario, setUsuario] = useState([])
  const [editando, setEditando] = useState(false)
  const [jwt, setJWT] = useState(
    () => localStorage.getItem('jwt')
  )

  return <Context.Provider value={{
    jwt,
    setJWT,
    usuarios,
    setUsuarios,
    usuario,
    setUsuario,
    editando,
    setEditando
  }}>
    {children}
  </Context.Provider>
}

export default Context
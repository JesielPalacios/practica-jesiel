import React, { createContext, useState } from 'react'

export const Context = createContext({})

export const UserContextProvider: React.FC = ({ children }) => {

  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])
  const [editing, setEditing] = useState(false)
  const [jwt, setJWT] = useState(
    () => localStorage.getItem('jwt')
  )

  return <Context.Provider value={{
    jwt,
    setJWT,
    users,
    setUsers,
    user,
    setUser,
    editing,
    setEditing
  }}>
    {children}
  </Context.Provider>
}

export default Context
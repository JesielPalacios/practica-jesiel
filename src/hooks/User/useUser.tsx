import { useCallback, useContext, useState } from "react";
import Context from "../../context/UserContext";
import loginService from "../../services/login";
import getUsersService from "../../services/getUsers";
import createUserService from "../../services/createUser";

export const useUser = () => {
  const { jwt, setJWT, users, setUsers, editing, setEditing } = useContext<any>(
    Context
  );
  const [state, setState] = useState({ loading: false, error: false });

  const login = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false });
      loginService({ email, password })
        .then((jwt) => {
          localStorage.setItem("jwt", jwt);
          setState({ loading: false, error: false });
          setJWT(jwt);
        })
        .catch((err) => {
          localStorage.removeItem("jwt");
          setState({ loading: false, error: true });
          console.error(err);
        });
    },
    [setJWT]
  );

  const logout = useCallback(() => {
    localStorage.removeItem("jwt");
    setJWT(null);
  }, [setJWT]);

  const getUsers = useCallback(
    (page) => {
      if (!jwt) return setUsers([]);
      getUsersService({ jwt, page })
        .then(setUsers)
        .catch((err) => {
          console.error(err);
        });
    },
    [jwt, setUsers]
  );

  const createUser = useCallback(
    ({ name, job }) => {
      createUserService({ jwt, name, job })
        // .then(() => {
        //   setUsers(...users, [name, job]);

        //   // .then((setUsers) => {

        //   // .then(setUsers)
        // })

        .then(setUsers)
        .catch((err) => {
          console.error(err);
        });
    },
    [jwt, setUsers]
  );

  // const obtenerUsuario = useCallback(numeroIdentificacion => {
  //   // if (!jwt) return setUsers([])
  //   obtenerUnUsuarioServicio({jwt, numeroIdentificacion}).then(setUser)
  //     .catch(err => {
  //       console.error(err)
  //     })
  // }, [jwt, setUser])

  // const eliminarUsuario = useCallback( numeroIdentificacion => {
  //   // (token: any) => localStorage.getItem('jwt')
  //   // if (!jwt) return setUsers([])
  //   eliminarUsuarioServicio({jwt, numeroIdentificacion})
  //   .catch(err => {
  //     console.error(err)
  //   })
  // }, [jwt])

  return {
    isLogged: Boolean(jwt),
    loadingUser: state.loading,
    errorLogin: state.error,
    login,
    logout,
    users,
    editing,
    setEditing,
    getUsers,
    createUser
  };
};

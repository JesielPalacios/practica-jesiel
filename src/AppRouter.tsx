import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import EditarUsuario from "./components/EditarUsuario";

import Login from "./Pages/Login";
import AcercaDe from "./Pages/AcercaDe";
import Contacto from "./Pages/Contacto";
import Usuarios from "./Pages/Usuarios";
import Usuario from "./Pages/Usuario";
import PaginaNoEncontrada from "./Pages/PaginaNoEncontrada";

import { ProveedorContextoUsuario } from "./context/ContextoUsuario";

const Inicio = React.lazy(() => import("./Pages/Inicio"));

export const AppRouter = () => {

  return (
    <ProveedorContextoUsuario>
        <Suspense fallback={null}>
            <Router>
                <Navbar />
                <Switch>
                    <Route exact path="/taller-vehicular" component={Inicio} />
                    <Route path="/acerca-de" component={AcercaDe} />
                    <Route path="/contacto" component={Contacto} />
                    <Route path="/usuarios" component={Usuarios} />
                    <Route path="/inicio-sesion" component={Login} />
                    <Route path="/usuario/:id" component={Usuario} />
                    {/* <Route path="/agregar-usuario" component={AddUser} /> */}
                    <Route path="/editar/:id" component={EditarUsuario} />
                    <Route component={PaginaNoEncontrada} />
                </Switch>
                <Footer />
            </Router>
        </Suspense>
    </ProveedorContextoUsuario>
  );

};
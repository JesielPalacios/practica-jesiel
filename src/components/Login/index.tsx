import { useEffect, useState } from "react"
import { FormularioLogin } from "./FormularioLogin"
import { credencialesUsuario } from "../../models/LoginModel";
import { useUsuario } from "../../hooks/User/useUsuario";
import { useHistory } from "react-router-dom";

export default function Login({onLogin}: any) {

    const history = useHistory();
    const [datosSesion, setDatosSesion] = useState<credencialesUsuario>({
        correoNombreUsuario: 'admin@localhost',
        contrasena: '12345678'
    });

    const {
        login,
        estaLogueado,
        cargandoUsuario,
        errorLogin
    } = useUsuario();

    useEffect(() => {
        if (estaLogueado)
        // <Redirect to="taller-vehicular" />
        // window.location.assign('/taller-vehicular');
        // < Navigate to = "/taller-vehicular" / >
        history.push('/taller-vehicular');
        onLogin && onLogin()
    }, [estaLogueado, history, onLogin])

    const handleInputChange = (event: any) => {
        setDatosSesion({
            ...datosSesion,
            [event.target.name] : event.target.value
        })
    };

    const onSubmit = (event: any) => {
        event.preventDefault();
        login({
            correo: datosSesion.correoNombreUsuario,
            contrasena: datosSesion.contrasena
        })
    };

    return (
        <>
            {cargandoUsuario && <strong>Checking credentials...</strong>}
            <div className="container mt-5">
                <h1>Inicio de sesión</h1>
                <hr />
                <h4>
                    A continuación ingrese sus credenciales para el inicio de sesión.
                </h4>
                <FormularioLogin
                    onSubmit={onSubmit}
                    handleInputChange={handleInputChange}
                />
            </ div>
            {errorLogin && <strong>Credentials are invalid</strong>}
        </>
    )
}

// const guardarToken: string ( idToken: string ) {
//     let userToken = idToken;
//     localStorage.setItem('token', idToken);

//     let hoy = new Date();
//     hoy.setSeconds( 3600 );

//     localStorage.setItem('expira', hoy.getTime().toString() );
// }

// const guardarToken: string ( idToken: string ) {
//     let userToken = idToken;
//     localStorage.setItem('token', idToken);

//     let hoy = new Date();
//     hoy.setSeconds( 3600 );

//     localStorage.setItem('expira', hoy.getTime().toString() );
// }
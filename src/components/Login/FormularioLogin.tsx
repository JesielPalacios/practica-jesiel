import { Link } from "react-router-dom"

export const FormularioLogin = (props: any) => {
    return (
        <form onSubmit={props.onSubmit}>
            <div className="col-md-8">
                <label htmlFor="name">Correo o nombre de usuario</label>
                <input
                    type="text"
                    name="correoNombreUsuario"
                    id="correoNombreUsuario"
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Ingrese el correo o nombre de usuario aquí"
                />
            </div>

            <div className="col-md-8">
                <label htmlFor="name">Contraseña</label>
                <input
                    type="password"
                    name="contrasena"
                    id="contrasena"
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Ingrese su contraseña aquí"
                />
            </div>

            <div className="col-md-3">
                <button
                    type="submit"
                    className="button muted-button btn btn-outline-success btn-block"
                >
                    Guardar
                </button>{' '}
                <Link
                    to="/taller-vehicular"
                    className="button muted-button btn btn-outline-danger btn-block"
                >
                    Cancelar
                </Link>
            </div>
        </form>
    )
}
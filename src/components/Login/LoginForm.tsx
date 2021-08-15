import { Link } from "react-router-dom"

export const LoginForm = (props: any) => {
    return (
        <form onSubmit={props.onSubmit} className="ml-5">
            <div className="col-md-8">
                <label htmlFor="name">Correo</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Ingrese su correo aquí"
                />
            </div>

            <div className="col-md-8">
                <label htmlFor="name">Contraseña</label>
                <input
                    type="password"
                    name="password"
                    id="password"
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
                    to="/usuarios"
                    className="button muted-button btn btn-outline-danger btn-block"
                >
                    Cancelar
                </Link>
            </div>
        </form>
    )
}
import { Link } from "react-router-dom"

export const UserForm = (props: any) => {
    return (
        <form onSubmit={props.onSubmit} className="ml-5">
            <div className="col-md-8">
                <label htmlFor="name">Nombre</label>
                <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Ingrese el nombre aquí"
                />
            </div>

            <div className="col-md-8">
                <label htmlFor="name">Trabajo</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    onChange={props.handleInputChange}
                    className="form-control"
                    placeholder="Ingrese el trabajo aquí"
                />
            </div>

            <div className="">
                <button
                    type="submit"
                    className="button muted-button btn btn-outline-success"
                >
                    Guardar
                </button>{' '}
                <Link
                    to="/usuarios"
                    className="button muted-button btn btn-outline-danger"
                >
                    Cancelar
                </Link>
            </div>
        </form>
    )
}
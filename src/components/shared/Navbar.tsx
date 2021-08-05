import { Link } from "react-router-dom";

import { useUsuario } from '../../hooks/User/useUsuario'

export default function Navbar() {

	const { estaLogueado, logout } = useUsuario()

	const handleClick = (e: any) => {
		e.preventDefault()
		logout()
	}

	const mostrarBotonLogin = ({estaLogueado}: any) => {
		return estaLogueado
			?
			<button
				// to="/taller-vehicular"
				className='btn btn-outline-danger'
				onClick={handleClick}
			>
				Cerrar sesión
			</button>
			:
			<Link
				to="/inicio-sesion"
				className='btn btn-outline-primary'
			>
				Iniciar sesión
			</Link>
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<img src="https://img.icons8.com/clouds/100/000000/monitor.png" width="30" height="30" alt="" loading="lazy"  />{" "}
				<Link to="/" className="navbar-brand"> Taller Vehicular S.A.</Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link to="/taller-vehicular" className="nav-link active" aria-current="page">Inicio</Link>
						</li>
						<li className="nav-item">
							<Link to="/acerca-de" className="nav-link">Acerca de nosotros</Link>
						</li>
						<li className="nav-item">
							<Link to="/contacto" className="nav-link">Contáctanos</Link>
						</li>
						{estaLogueado ?
							<li className="nav-item">
								<Link to="/usuarios" className="nav-link">Usuarios</Link>
							</li>
						: null}
					</ul>

					<span className="navbar-text">
							{
								mostrarBotonLogin({estaLogueado})
							}
					</span>
				</div>
			</div>
		</nav>
	);
}
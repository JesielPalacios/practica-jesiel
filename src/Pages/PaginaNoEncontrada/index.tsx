import { Link } from "react-router-dom";

export default function PaginaNoEncontrada() {
    return (
      <div className="container mt-5">
        <h3>Ruta no encontrada</h3>
        <p>
            <span>
                A continuación puede dirigirse a la página principal para conocer mejor lo que necesita:<br/><br/><br/>
                <Link to="/taller-vehicular">
                    <button className="btn btn-outline-primary">Ir a inicio de Taller vehicular S.A.</button>
                </Link>
            </span>
        </p>
    </div>
    );
}
import { OBTENER_USUARIOS, OBTENER_PERFIL_USUARIO } from "../tipos";

// eslint-disable-next-line import/no-anonymous-default-export
export default (estado: any, accion: any) => {
  const { cargaUtil, tipo } = accion;

  switch (tipo) {
    case OBTENER_USUARIOS:
      return {
        ...estado,
        usuarios: cargaUtil,
      };
    case OBTENER_PERFIL_USUARIO:
      return {
        ...estado,
        usuarioSeleccionado: cargaUtil,
      };
    default:
      return estado;
  }
};

const API = 'http://localhost:4000/api'
const ENDPOINT = 'usuarios'

const fromApiResponseToGifs = (apiResponse: any) => {
  if (Array.isArray(apiResponse)) {
    const usuarios = apiResponse.map((usuario: any) => {
      const {
        rol,
        numeroIdentificacion,
        nombre,
        apellido,
        correo,
        numeroTelefono,
        domicilio,
        vehiculos
      } = usuario

      return {
        rol,
        numeroIdentificacion,
        nombre,
        apellido,
        correo,
        numeroTelefono,
        domicilio,
        vehiculos
      }
    })
    return usuarios
  }
  return []
}

export default function obtenertodosLosUsuarios ({jwt}: any) {
  return fetch(`${API}/${ENDPOINT}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${jwt}`
      "Authorization": jwt
    }
  })
  .then((res) => res.json())
  .then(fromApiResponseToGifs)
}
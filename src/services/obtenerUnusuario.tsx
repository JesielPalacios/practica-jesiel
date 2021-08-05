const API = 'http://localhost:4000/api'
const ENDPOINT = 'usuario'

export default function obtenerUnUsuario ({jwt, numeroIdentificacion}: any) {
  return fetch(`${API}/${ENDPOINT}/${numeroIdentificacion}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": jwt
    }
  }).then(res => {
    if (!res.ok) throw new Error('La respuesta es NO ok')
    return res.json()
  }).then(res => {
    return res
  })
}
const API = 'http://localhost:4000/api'
const ENDPOINT = 'usuario'

export default function eliminarUnUsuarioPorId ({ jwt, numeroIdentificacion }: any) {
  return fetch(`${API}/${ENDPOINT}/${numeroIdentificacion}`, {
    method: 'DELETE',
    headers: {
      "Authorization": jwt,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({numeroIdentificacion})
  }).then((res) => {
    return res.json()
  })
}
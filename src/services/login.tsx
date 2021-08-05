const API = 'http://localhost:4000/api'
const ENDPOINT = 'auth/inicio-sesion'

export default function login ({ correo, contrasena }: any) {
  return fetch(`${API}/${ENDPOINT}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({correo, contrasena})
  }).then(res => {
    if (!res.ok) throw new Error('La respuesta es NO ok')
    return res.json()
  }).then(res => {
    const { token } = res
    // console.log(res);
    return token
  })
}
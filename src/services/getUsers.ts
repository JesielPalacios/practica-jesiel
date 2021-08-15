const API = "https://reqres.in/api";
const ENDPOINT = "users";

const fromApiResponseToUsers = (apiResponse: any) => {
  if (Array.isArray(apiResponse)) {
    const users = apiResponse.map((user: any) => {
      const { id, email, first_name, last_name, avatar } = user;

      return {
        id,
        email,
        first_name,
        last_name,
        avatar
      };
    });
    return users;
  }
  return [];
};

export default function getUsers({ jwt, page }: any) {
  return fetch(`${API}/${ENDPOINT}?page=${page}`, {
    // return fetch(`${API}/${ENDPOINT}?per_page=12`, {
    method: "GET",
    headers: {
      "Authorization": jwt,
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res.data;
    })
    .then(fromApiResponseToUsers);
}

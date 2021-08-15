const API = "https://reqres.in/api";
const ENDPOINT = "users";

const fromApiResponseToUsers = (apiResponse: any) => {
  if (Array.isArray(apiResponse)) {
    const users = apiResponse.map((user: any) => {
      const { id, name, job, createdAt } = user;

      return {
        id,
        name,
        job,
        createdAt
      };
    });
    return users;
  }
  return [];
};

export default function createUser({ jwt, name, job }: any) {
  return fetch(`${API}/${ENDPOINT}`, {
    method: "POST",
    headers: {
      Authorization: jwt,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, job })
  })


  .then(fromApiResponseToUsers);
}

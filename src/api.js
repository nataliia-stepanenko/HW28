const API_URL = "https://dummyjson.com";

export const getUsers = () => {
    return fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then(({users}) => users)
};

export const getUserById = (id) => {
    return fetch(`${API_URL}/users/${id}`)
    .then((response) => response.json())
};



const LOGIN_URL = "https://dummyjson.com";

export const login = (credentials) => {
    return fetch(`${LOGIN_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials)
      })
      .then(res => res.json())
    //   .then(console.log);
}
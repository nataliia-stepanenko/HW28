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
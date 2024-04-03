import { API } from "../config"

export const register = (user) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response=>response.json())
    .catch(error=>console.log(error))
}
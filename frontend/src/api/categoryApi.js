import { API } from "../config"

export const getAllCategory = () => {
    return fetch(`${API}/getAllCategory`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


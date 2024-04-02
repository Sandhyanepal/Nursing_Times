import { API } from "../config";

export const getAllPost = () => {
    return fetch(`${API}/getallposts`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}
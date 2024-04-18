import { API } from "../config";

export const getAllPost = () => {
    return fetch(`${API}/getallposts`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const getpost = () => {
    return fetch(`${API}/getpost/:id`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

export const addpost = (formData) => {
    return fetch(`${API}/addpost`,{
        method: "POST",
        body: formData
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
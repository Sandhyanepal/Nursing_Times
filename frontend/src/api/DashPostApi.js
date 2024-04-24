import { API } from "../config"

//to delete Post
export const deletePost = (id) => {
    return fetch(`${API}/deletepost/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        }
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
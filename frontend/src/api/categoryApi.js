import { API } from "../config"

export const getAllCategory = () => {
    return fetch(`${API}/getAllCategory`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


//add new category
export const addCategory = (category_name) => {
    return fetch(`${API}/addCategory`,{
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({category_name})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


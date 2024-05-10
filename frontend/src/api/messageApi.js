import { API } from "../config"

export const submitUserMessage = (message) =>{
    return fetch(`${API}/submitusermessage`,{
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(message)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

//Get All Message
export const getallmessage=()=>{
    return fetch(`${API}/getallmessage`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

// Get Message By Id
export const getmessage = (id) =>{
    return fetch(`${API}/getmessage/${id}`)
    .then(response=>response.json())
    .catch(error=>console.log(error))
}

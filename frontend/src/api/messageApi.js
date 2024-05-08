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


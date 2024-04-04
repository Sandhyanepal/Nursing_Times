import { API } from "../config"


// REGISTER
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


export const verifyUser = (token) => {
    return fetch(`${API}/verify/${token}`)
    .then(response => response.json())
    .catch(error => console.log(error))
}


// LOGIN
export const login = (user) => {
    return fetch(`${API}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
}

// TO KEEP LOGGED IN
export const isAuthenticate = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem('jwt')){
            return {Authenticated: true, data: JSON.parse(localStorage.getItem('jwt'))}
        }
        else{
            return {Authenticated: false, data: null}
        }
    }
}
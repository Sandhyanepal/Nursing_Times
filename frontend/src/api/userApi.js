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
export const authenticate = (data) =>{
    localStorage.setItem('jwt', JSON.stringify(data))

}

// TO KEEP LOGGED IN
// export const authenticate = (data) => {
//     console.log("Data received for authentication:", data);
//     localStorage.setItem('jwt', JSON.stringify(data));
//     console.log("User authentication data stored in local storage:", data);
// }


// to check if logged in
export const isAuthenticate = () => {
    if(typeof window !== "undefined"){
        if(localStorage.getItem('jwt')){
            return JSON.parse(localStorage.getItem('jwt'))
        }
        else{
            return false
        }
    }
}
import { API } from "../config"


// REGISTER
export const register = (user) => {
    return fetch(`${API}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(error => console.log(error))
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
export const authenticate = (data) => {
    localStorage.setItem('jwt', JSON.stringify({user:data}))

}


// to check if logged in
export const isAuthenticate = () => {
    if (localStorage.getItem('jwt')) {
        return JSON.parse(localStorage.getItem('jwt'))
    }
    else {
        return false
    }
}

// LOGOUT
export const logout = next => {
    localStorage.removeItem('jwt')
    next()
    return fetch(`${API}/logout`, {
        method: 'POST'
    })
        .then(res => {
            console.log('logout', res)
        })
        .catch(err => console.log(err))
}


// FORGET PASSWORD
export const forgetpassword=user=>{
    return fetch(`${API}/forgetpassword`,{
        method: 'POST',
        headers:{
            Accept: "application/json",
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
    })
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}







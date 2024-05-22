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


export const getUserInfo = (id) => {
    return fetch(`${API}/getuserdetails/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

// LOGIN
export const login = (user) => {
    console.log(API)
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
    localStorage.setItem('jwt', JSON.stringify(data))

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


// Update user
export const updateuser = async (id, userData, token) => {
    console.log(userData)
    try {
        const response = await fetch(`${API}/updateuser/${id}`, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
            body: userData
        });
        return response.json();
    } catch (error) {
        console.error(error);
        return { error: "An error occurred while updating user info." };
    }
};

// Delete user
// export const deleteuser = async (userId, id) => {
export const deleteuser = async (id) => {

    try {
        const response = await fetch(`${API}/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            // body: JSON.stringify({userId})
        });
        return response.json();
    } catch (error) {
        console.error(error);
        return { error: "An error occurred while deleting the user." };
    }
};


// Get all users
export const getallusers = async () =>{
    const result = await fetch(`${API}/getallusers`)
    return result.json()
}



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
    .then(response=>response.json())
    .catch(error=>console.log(error))
}


export const deletepost = async (postId,id) => {
// export const deletepost = async (id) => {

    try {
        const response = await fetch(`${API}/deletepost/${postId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id})
        });
        return response.json();
    } catch (error) {
        console.error(error);
        return { error: "An error occurred while deleting the post." };
    }
};


export const updatepost = async (id, postData) => {
    try{
        const response = await fetch(`${API}/updatepost/${id}`,{
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
        return response.json();
    } catch (error) {
        console.error(error);
        return { error: "An error occurred while deleting the post." };
    }
}

export const viewcomment = (postId) => {
    return fetch(`${API}/post/${postId}/comments`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}
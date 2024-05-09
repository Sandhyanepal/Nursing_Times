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

export const getpostsbyuser = (userId) => {
    return fetch(`${API}/posts/user/${userId}`)
        .then(response => response.json())
        .catch(error => console.log(error));
};

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
console.log('postid',postId, "id", id)
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
    // localhost:5000/posts/6634a6494898062b01c271d2/comments
    return fetch(`${API}/posts/${postId}/comments`)
    .then(res=>res.json())
    .catch(err=>console.log(err))
}

export const deletecomment = (commentId,id) =>{
    return fetch(`${API}/deletecomment/${commentId}`, {
        method:"DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id})
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


export const postcomment = (postId, comment, userId) => {
    return fetch(`${API}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ comment_msg: comment, postId, userId })
    })
    .then(res=>res.json())
    .catch(err=>console.log(err))
}


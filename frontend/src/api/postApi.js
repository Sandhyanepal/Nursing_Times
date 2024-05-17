import { API } from "../config";


// To fetch all the post
export const getAllPost = () => {
    return fetch(`${API}/getallposts`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

// To get post by its ID
export const getpost = () => {
    return fetch(`${API}/getpost/:id`)
        .then(response => response.json())
        .catch(error => console.log(error))
}


// To fetch the all the post by particular User
export const getpostsbyuser = (userId) => {
    return fetch(`${API}/posts/user/${userId}`)
        .then(response => response.json())
        .catch(error => console.log(error));
};


// To fetch the post by category 
export const getpostbycategory = (id) => {
    return fetch(`${API}/getpostbycategory/${id}`)
        .then(response => response.json())
        .catch(error => console.log(error));
}


// To create a post
export const addpost = (formData) => {
    return fetch(`${API}/addpost`, {
        method: "POST",
        body: formData
    })
        .then(response => response.json())
        .catch(error => console.log(error))
}


// To delete a post
export const deletepost = async (postId, id) => {
    // export const deletepost = async (id) => {
    console.log('postid', postId, "id", id)
    try {
        const response = await fetch(`${API}/deletepost/${postId}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        });
        return response.json();
    } catch (error) {
        console.error(error);
        return { error: "An error occurred while deleting the post." };
    }
};


// To update a post
export const updatepost = async (id, postData) => {
    try {
        const response = await fetch(`${API}/updatepost/${id}`, {
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


// To fetch all the comments of particular post
export const viewcomment = (postId) => {
    // localhost:5000/posts/6634a6494898062b01c271d2/comments
    return fetch(`${API}/posts/${postId}/comments`)
        .then(res => res.json())
        .catch(err => console.log(err))
}


// To delete the comment
export const deletecomment = (commentId, id) => {
    return fetch(`${API}/deletecomment/${commentId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}


// To post a comment
export const postcomment = (postId, comment, userId) => {
    return fetch(`${API}/posts/${postId}/comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ comment_msg: comment, postId, userId })
    })
        .then(res => res.json())
        .catch(err => console.log(err))
}


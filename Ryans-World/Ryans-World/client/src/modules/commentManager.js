import { getToken } from "./authManager";

const baseUrl = "/api/comment";

export const getAllComments = () => {
    return getToken().then(token => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("An error occured while retrieving comments")
            }
        })
    })
}

export const addComment = (newComment) => {
    console.log(newComment)
    return getToken().then(token => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newComment)
        })
    })
}

export const deleteComment = (id) => {
    return getToken().then(token => {
        return fetch(`${baseUrl}/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
    })
}
import { getToken } from "./authManager";

const baseUrl = "/api/category";

export const getAllCategories = () => {
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
                throw new Error("An error occured while retrieving categories")
            }
        })
    })
}
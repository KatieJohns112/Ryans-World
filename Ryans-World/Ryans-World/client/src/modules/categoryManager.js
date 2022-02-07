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

export const addCategory = (newCategory) => {
    return getToken().then(token => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCategory)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("An error occured when creating a category")
            }
        })
    })
}

export const updateCategory = (category) => {
    return fetch(`${baseUrl}/${category.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
    });
};

export const getCategory = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
};

export const deleteCategory = (id) => {
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
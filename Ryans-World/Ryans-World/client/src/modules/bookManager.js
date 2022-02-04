import { getToken } from "./authManager";

const baseUrl = "/api/book";

export const getAllBooks = () => {
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
                throw new Error("An error occured while retrieving all books")
            }
        })
    })
}


export const getAllBooksByUserId = (id) => {
    return getToken().then(token => {
        return fetch(baseUrl + `/currentUserBooks/${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("An error occured while retrieving all books")
            }
        })
    })
}


export const addBook = (newBook) => {
    return getToken().then(token => {
        return fetch(baseUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newBook)
        }).then(res => {
            if (res.ok) {
                return res.json()
            } else {
                throw new Error("An error occured when creating a new book")
            }
        })
    })
}

export const deleteBook = (id) => {
    console.log(baseUrl + `${id}`)
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

export const updateBook = (book) => {
    console.log(book);
    return fetch(baseUrl, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book)
    })
}

export const getBook = (id) => {
    return fetch(`${baseUrl}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application.json"
        },
    }).then((res) => res.json());
}
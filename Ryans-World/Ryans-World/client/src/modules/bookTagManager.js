const baseUrl = "/api/bookTag";

export const getAllBookTags = () => {
    return fetch(baseUrl).then((res) => res.json());
};

export const addBookTag = (book) => {
    return fetch(baseUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    });
};

export const getBookTag = (bookTagId) => {
    return fetch(`${baseUrl}/${bookTagId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
};

export const getBookTagsByBookId = (bookId) => {
    return fetch(baseUrl + `/bookTags/${bookId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
};


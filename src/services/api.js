import urlApi from "../config/api";

const getCharacters = (query) => {
    console.log('getCharacters');
    return fetch(`${urlApi}?${query}`).then((res) => res.json());

};

export default getCharacters;


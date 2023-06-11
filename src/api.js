//Base URL

const base_url = "https://swapi.dev/api/";

export const people = () => `${base_url}people/?page=`;
export const planets = () => `${base_url}planets/?planet=`;
export const vehicles = () => `${base_url}vehicles/?vehicles=`;
export const searchedPersonURL = (search) =>`${base_url}people/?search=${search}`


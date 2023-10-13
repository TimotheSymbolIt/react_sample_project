import axios from "axios";

/**
 * Instance axios to the BACKEND 
 */

//Export du fichier
const apiBackEnd = axios.create({
    baseURL: "http://localhost:4000",
});

export {apiBackEnd};


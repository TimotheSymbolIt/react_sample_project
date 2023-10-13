import { apiBackEnd } from "../axiosInstance"
import { URL_BACK_AUTHENTICATE, URL_BACK_REGISTER } from "../url/auth"

function authenticate(values) {
    return apiBackEnd.post(URL_BACK_AUTHENTICATE, values)
}


function register(values) {
    return apiBackEnd.post(URL_BACK_REGISTER, values)
}

export {
    authenticate,
    register,
}
import axios from "../utils/http"
import base from "./base"

const api = {
    getMapData(){
        return axios.get(base.baseUrl+base.map)
    }
}

export default api
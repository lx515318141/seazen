import axios from "../utils/http"
import base from "./base"

const api = {
    getMapData(){
        return axios.get(base.baseUrl+base.map)
    },
    // 登录接口
    getLogin(params){
        return axios.post(base.baseUrl+base.login,params)
    }
}

export default api
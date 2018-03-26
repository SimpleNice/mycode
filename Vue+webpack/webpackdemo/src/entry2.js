import Axios from 'axios'
import Promise from 'es6-promise'
Promise.polyfill()
import qs from 'qs'
const URL= 'http://192.168.0.112/account/login/username'
let params = {
    username:'admin',
    password:'admin',
}
Axios.post(URL,qs.stringify(params))
.then(res=>{
    console.log(res)
    }
)
.catch(error=>{
    console.log(error)
    }
)
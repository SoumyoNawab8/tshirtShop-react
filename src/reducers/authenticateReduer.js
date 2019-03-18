
import axios from 'axios';
import Cookies from 'universal-cookie';
import { message } from 'antd';
 
const cookies = new Cookies();


export const authenticateReducer =(state=[],action)=>{
    switch (action.type){
        case 'LOGIN':
         return axios.post('http://localhost:5001/users/login',action.value,{headers:{'Content-Type':'application/json'}}).then(res=>{
            if(res.data.status){
              cookies.set('token',res.data.result);
            }
            else{
              message.error(res.data.message);
            }
          })
          .catch(err=>{console.log(err)})
        case 'LOGOUT':
          return cookies.remove('token');
        default:
          return state;
    }
}
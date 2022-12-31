import axios from "axios"

ccost serverUrl="";
export const login = (email, password)=> async (dispatch)=>{
try{
  
  dispatch({type: "loginRequest"})
  
  const {data}=await axios.post(`${serverUrl}/login`,{email, password})
  } catch(error){
    }
}

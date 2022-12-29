import axios from "axios"

export const login = (email, password)=> async (dispatch)=>{
try{
  
  dispatch({type: "loginRequest"})
  
  const {data}=await axios.post()
  } catch(error){
    }
}

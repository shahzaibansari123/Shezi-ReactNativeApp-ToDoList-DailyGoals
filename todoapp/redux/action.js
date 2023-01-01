import axios from "axios"

ccost serverUrl="";
export const login = (email, password)=> async (dispatch)=>{
try{
  
  dispatch({type: "loginRequest"})
  
  const {data}=await axios.post(`${serverUrl}/login`,{email, password,{
                                                     headers:{
                                                      "Content-Type" : "application/json",
                                                      },
                                                     })
  
  dispatch({type: "loginSuccess", payload: data})
  } catch(error){
    }
}

export const sendToken=(res, user, statusCode,message)=>{
 res.statusCode(statusCode).json({success:true, message});
}
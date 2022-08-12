export const sendToken=(res, user, statusCode,message)=>{



    const userData={
        _id: user._id,
        name:user.name,
        email:user.email,
        avatar:user.avatar,
        tasks:user.tasks,
    }
 res.statusCode(statusCode).json({success:true, message, userData});
}
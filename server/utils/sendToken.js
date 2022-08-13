export const sendToken=(res, user, statusCode,message)=>{

const options={
    httpOnly: true,
    expires: new Date(Date.now() + process.env.COOKIE_JWT_EXPIRES_AT * 60 * 1000)
}

    const userData={
        _id: user._id,
        name:user.name,
        email:user.email,
        avatar:user.avatar,
        tasks:user.tasks,
    }
 res.statusCode(statusCode).cookie("token", token, options).json({success:true, message, userData});
}
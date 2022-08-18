import jwt from 'jsonwebtoken'
import { User } from '../models/users'

export const isAuthenticated= async(req, res)=>{
    try {
        const {token} = req.cookies;

        if(!token){
            res.status(401).json({ success: false, message: "Login First" });    
        }

        const decoded= jwt.verify(token, process.env.JWT_SEcRET_KEY);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}
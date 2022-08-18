import jwt from 'jsonwebtoken'
import { User } from '../models/users'

export const isAuthenticated= async(req, res)=>{
    try {
        const {token} = req.cookies;

        if(!token){
            res.status(401).json({ success: false, message: "Login First" });    
        }
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}
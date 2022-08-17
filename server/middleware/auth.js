import jwt from 'jsonwebtoken'
import { User } from '../models/users'

export const isAuthenticated= async(req, res)=>{
    try {
        const {token} = req.cookies;
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }

}
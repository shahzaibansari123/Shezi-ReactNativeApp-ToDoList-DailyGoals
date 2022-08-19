import express from "express";
import {register, verify} from '../controllers/User.js'

const router= express.Router();


router.route('/register').post(register)
router.route('/verify').post(verify)

export default router;
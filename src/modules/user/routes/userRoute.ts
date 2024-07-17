import { Express } from "express";
import { Router } from "express";
import {register,login,getProfile} from "../controller/userController"
import {auth }from '../../../middleware/authMiddleware'
const  route=Router();

route.post('/register',register)
route.post('/login',auth,login)
route.get('/',auth,getProfile)
export default route;
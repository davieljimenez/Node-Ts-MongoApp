import {Router, Request, Response} from "express"

const router:Router = Router();
import {indexController} from "../controllers/index.Controller"


router.get("/", indexController.index );



export default router;
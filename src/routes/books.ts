import { Router } from 'express';
import{booksController} from "../controllers/books.Controller"

const router: Router = Router();

router.get("/", booksController.index)
router.get("/add",booksController.renderFormBook)
router.post("/add", booksController.saveBook)

export default router;
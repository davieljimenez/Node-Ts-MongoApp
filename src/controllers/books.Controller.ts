import {Response, Request} from "express"
import BookModel, {Book} from "../models/book.schema";
class BooksController {
   public async index(req: Request, res:Response){
       const books= await BookModel.find({});
        res.render("books/index",{
           title:"Books",
           books
       });
   }
   
    public renderFormBook(req:Request, res:Response): void{
        res.render("books/add",{
            title: "Add A Book"
        })
    }

    public async saveBook(req:Request, res:Response){
        const {title, author, isbn } =req.body
        const book:Book = new BookModel({title, author, isbn});
        await book.save();
        res.redirect("/books")
    }
}

export const booksController = new BooksController();
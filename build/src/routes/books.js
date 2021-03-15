"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_Controller_1 = require("../controllers/books.Controller");
const router = express_1.Router();
router.get("/", books_Controller_1.booksController.index);
router.get("/add", books_Controller_1.booksController.renderFormBook);
router.post("/add", books_Controller_1.booksController.saveBook);
exports.default = router;

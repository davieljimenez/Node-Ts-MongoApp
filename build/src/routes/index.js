"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const index_Controller_1 = require("../controllers/index.Controller");
router.get("/", index_Controller_1.indexController.index);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
// Importing Routes
const index_1 = __importDefault(require("./routes/index"));
const books_1 = __importDefault(require("./routes/books"));
//Initializations 
const app = express_1.default();
require("./database");
// Settings
app.set("port", process.env.PORT || 8000);
app.set("views", path_1.default.join(__dirname, "views"));
app.engine("hbs", express_handlebars_1.default({
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path_1.default.join(app.get("views"), "layouts"),
    partialsDir: path_1.default.join(app.get("views"), "partials"),
    helpers: require("./lib/helpers")
}));
app.set("view engine", ".hbs");
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
// Routes
app.use("/", index_1.default);
app.use("/books", books_1.default);
// Static file
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Starting server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`);
});

import mongoose from "mongoose"
import {mongodb} from "./keys"

mongoose.connect(mongodb.URI,{
    useNewUrlParser:true
})
    .then(db =>console.log("DB is conected"))
    .catch(e=>console.log(e));
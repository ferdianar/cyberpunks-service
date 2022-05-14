const express = require("express")
const routes = express.Router()

/** Book Controllers */
const GetAllBooks = require("../controllers/Books/GetAllBooks")
const CreateBooks = require("../controllers/Books/CreateBooks")
const UpdateBooks = require("../controllers/Books/UpdateBooks")
const DeleteBooks = require("../controllers/Books/DeleteBooks")
const GetSelectedBook = require("../controllers/Books/GetSelectedBook")

/** in this case , i use prefix api version v1 */

// routes get, create, update and delete books
routes.get("/v1/books", GetAllBooks)
routes.get("/v1/books/:id", GetSelectedBook)
routes.post("/v1/books", CreateBooks)
routes.put("/v1/books/:id", UpdateBooks)
routes.delete("/v1/books/:id", DeleteBooks)

module.exports = routes
const router = require("express").Router();
const booksRouter=  require("../modules/books/book.route");




router.use("/api/v1/books", booksRouter);


module.exports = router;
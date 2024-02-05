const router = require("express").Router();

const bookController = require("./book.controller");

router.get("/", async(req, res, next) => {
    try {
        const result= await bookController.get();
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.post("/", async(req, res, next) => {
    try {
        const result= await bookController.create(req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.get("/:_id", async(req, res, next) => {
    try {
        const result= await bookController.getById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

  router.put("/:_id", async(req, res, next) => {
    try {
        const result= await bookController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.patch("/:_id", async(req, res, next) => {
    try {
        const result= await bookController.updateById(req.params.id, req.body);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });
  router.delete("/:_id", async(req, res, next) => {
    try {
        const result= await bookController.removeById(req.params.id);
      res.json({ msg: result });
    } catch (e) {
      next(e);
    }
  });

module.exports=router;
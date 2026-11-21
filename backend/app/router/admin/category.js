const uploadCategoryImage = require("../../http/middlewares/uploadCategoryImage");
const router = require("express").Router();
const expressAsyncHandler = require("express-async-handler");
const {
  CategoryController,
} = require("../../http/controllers/category.controller");

router.post(
  "/add",
  uploadCategoryImage.single("coverImage"),
  expressAsyncHandler(CategoryController.addNewCategory)
);

router.patch(
  "/update/:id",
  uploadCategoryImage.single("coverImage"),
  expressAsyncHandler(CategoryController.updateCategory)
);
router.delete(
  "/remove/:id",
  expressAsyncHandler(CategoryController.removeCategory)
);

module.exports = {
  categoryAdminRoutes: router,
};

const {Router} = require("express");
const { categoriesController } = require("../controllers/categories.controller");


const router = Router();
// проверено
router.post("/admin/categories", categoriesController.postCategory);
router.patch("/admin/categories/:id", categoriesController.patchCategory);
router.delete("/admin/categories/:id", categoriesController.deletecategory);
router.get("/categories", categoriesController.getCategories);
router.get("categories/:id", categoriesController.getCategoriesById);

module.exports = router;
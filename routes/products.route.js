const {
  Router
} = require("express");
const {
  productController
} = require("../controllers/products.controller");

const router = Router();

router.post("/admin/product", productController.postProduct);
router.get("/product", productController.getAllProducts);
router.get("/product/:id", productController.getProductById);
router.get("/product/category/:id", productController.getProductByCategory);
router.get("/product/brand/:id", productController.getProductByBrand);
router.delete("/admin/product/:id", productController.deleteProductById);
router.patch("/admin/product/:id", productController.patchProduct);

module.exports = router;
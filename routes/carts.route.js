const {
  Router
} = require("express");
const {
  cartController
} = require("../controllers/carts.controller");

const router = Router();

router.post("/user/cart", cartController.postCart);
router.get("/user/:id/cart", cartController.getCartByUserId);
router.delete("/user/:id/cart/:id", cartController.deleteProductById);
router.patch("/user/:id/cart/:id", cartController.patchCart);

module.exports = router;
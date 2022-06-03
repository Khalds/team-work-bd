const {Router} = require("express");
const { usersController } = require("../controllers/users.controller");


const router = Router();

router.post("/admin/user", usersController.postUser);
router.patch("/admin/user/:id", usersController.patchUser);
router.delete("/admin/user/:id", usersController.deleteUser);
router.get("/user", usersController.getUsers);
router.get("/user/:id", usersController.getUserById);

module.exports = router;
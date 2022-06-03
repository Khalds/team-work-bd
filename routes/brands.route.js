//Работает

const { Router } = require("express");
const { brandController } = require("../controllers/brands.controller");

const router = Router();

router.post('/admin/brand', brandController.postBrand)
router.get('/brand', brandController.getBrand)
router.get('/brand/:id', brandController.getBrandById)
router.patch('/admin/brand/:id', brandController.patchBrand)
router.delete('/admin/brand/:id', brandController.deleteBrand)

module.exports = router;
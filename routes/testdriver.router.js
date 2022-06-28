import { Router } from "express";
import { getTestDrivers, addTestDrivers, getTestDriver, updateTestDriver, deleteTestDriver } from "../controllers/testdriver.controller.js"

const router = Router();

router.post('/',addTestDrivers);
router.get('/',getTestDrivers);
router.get('/:id',getTestDriver);
router.put('/:id',updateTestDriver);
router.delete('/:id',deleteTestDriver);

export default router;
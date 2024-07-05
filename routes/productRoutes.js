import { Router } from "express";
import {getAll} from "../controllers/productControllers.js"

export default productRoutes = Router()

productRoutes.get('/', getAll )
import { Router } from "express";
import {getAll} from "../controllers/productControllers.js"

export const productRoutes = Router();

productRoutes.get('/', getAll )
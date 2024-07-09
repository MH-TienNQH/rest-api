import { Router } from "express";
import {createHotel, deleteHotel, findByID, getAll, updateHotel} from "../controllers/hotelControllers.js"

export const hotelRoutes = Router();

hotelRoutes.get('/', getAll )
hotelRoutes.get('/:id', findByID)
hotelRoutes.post('/create', createHotel)
hotelRoutes.put('/update/:id', updateHotel)
hotelRoutes.delete('/:id', deleteHotel)
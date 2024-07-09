import { create, deleteByID, findAll, update } from "../db/Queries"

export const getAll = async (req, res, next) =>{
    try {
        const hotels = await findAll();
        return res.json({hotels})
    } catch (error) {
        res.status(500).json({message : error});
    }
}
export const findByID = async (req, res) => {
    const id = req.params.id;
    try {
        const hotel = await findByID(id);
        return res.status(200).json({hotel})
    } catch (error) {
        res.status(500).json({message : error});
    }

}

export const createHotel = async (req, res) =>{
    const {name, type, city, address, distance, photos, rating, room_id, description} = req.body;

    try {
        const hotel = await create(name, type, city, address, distance, photos, rating, room_id, description);
        return res.status(201).json({hotel})
    } catch (error) {
        res.status(500).json({message : error})
    }
}

export const updateHotel = async (req, res) => {
    const id = req.params.id;
    const {name, type, city, address, distance, photos, rating, room_id, description} = req.body;
    try {
        const hotel = await update(id, name, type, city, address, distance, photos, rating, room_id, description);
        return res.status(201).json({hotel})
    } catch (error) {
        res.status(500).json({message : error})
    }
}

export const deleteHotel = async(req, res) => {
    const id = req.params.id;
    try {
        await deleteByID(id);
        return res.status(200).json({message: "delete ok"})
    } catch (error) {
        res.status(500).json({message : error})
    }
}
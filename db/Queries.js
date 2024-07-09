import { pool } from "./DbConnect";

export const findAll = async () => {
    const QUERY = 'SELECT * FROM hotel';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

export const findByID = async (id) => {
    const QUERY = "SELECT * FROM hotel WHERE id = ?"
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[id]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}

export const create = async (name, type, city, address, distance, photos, rating, room_id, description) => {
    const QUERY = `INSERT INTO hotel (name, type, city, address, distance, photos, rating, room_id, description) 
                    VALUES(?,?,?,?,?,?,?,?,?)`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[name, type, city, address, distance, photos, rating, room_id, description]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}
export const deleteByID = async(id) => {
    const QUERY = "DELETE FROM hotel WHERE id = ?"
    try {
        const client = await pool.getConnection();
        await client.query(QUERY,[id]);
    } catch (error) {
        console.log(error);
    }
}

export const update = async(id, name, type, city, address, distance, photos, rating, room_id, description) =>{
    const QUERY = `UPDATE hotel
                    SET name = ?, type =? , city=?, address=?, distance=?, photos=?, rating=?, room_id=?, description=?
                    WHERE id = ?`;
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY,[id, name, type, city, address, distance, photos, rating, room_id, description]);
        return result[0];
    } catch (error) {
        console.log(error);
    }
}
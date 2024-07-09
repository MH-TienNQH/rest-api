import { pool } from "./DbConnect";

export const findAll = async () => {
    const QUERY = 'SELECT * FROM hotel';
    try {
        const client = await pool.getConnection();
        const result = await client.query(QUERY);
        return result;
    } catch (error) {
        console.log(error);
    }
}
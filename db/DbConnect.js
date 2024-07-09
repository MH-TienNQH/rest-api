import { createPool } from "mysql2/promise";
import dotenv, { config } from "dotenv";

config();
export const pool = createPool({
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
});

export const connectDb = async() =>{
    try {
       await pool.getConnection(); 
       console.log("Connect to DB success")
    } catch (error) {
        console.log(error)
        throw error
    }
}


import express from "express"
import dotenv from "dotenv"
import {productRoutes} from "./routes/productRoutes.js";
import {connectDb} from "./db/DbConnect.js"

dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.use("/api/products", productRoutes)

app.get("/", (req, res, next) => {
    res.send({message: "ok"})
})

connectDb().then(() => {
    app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
}).catch(err => {
    console.log(err);
    process.exit(0);
})


import express from "express"
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT;

const app = express();

app.get("/", (req, res, next) => {
    res.send({message: "ok"})
})

app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
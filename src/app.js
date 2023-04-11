import express from "express";
import cors from "cors";
import routes from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(5000, () => console.log("Express listening on 5000..."));

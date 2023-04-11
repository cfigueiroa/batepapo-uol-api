import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import errorMiddleware from "./middlewares/errorMiddleware.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.use(errorMiddleware);

app.listen(5000, () => console.log("Express listening on 5000..."));

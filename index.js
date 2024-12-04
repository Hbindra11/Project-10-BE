import express from "express";
import cors from "cors";
import "./db/index.js";
import errorHandler from "./middleware/errorHandler.js";
import notFoundHandler from "./middleware/notFound.js";
import routerLeaderboard from "./routers/routerLeaderboard.js";
import routerPokemon from "./routers/routerPokemon.js";
const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());
app.use("/leaderboard", routerLeaderboard);
app.use("/roster", routerPokemon);
app.use("*", notFoundHandler);
app.use(errorHandler);
app.listen(port, () => console.log(`listening on port: ${port} `));

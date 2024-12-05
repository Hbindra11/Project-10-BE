import express from "express";
import { addPokemon, getRoster, removePokemon} from "../controllers/pokemon.js";

const routerPokemon = express.Router();

routerPokemon.route("/").get(getRoster).post(addPokemon);
routerPokemon.route("/:id").delete(removePokemon);

export default routerPokemon;

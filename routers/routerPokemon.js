import express from "express";
import { addPokemon, getRoster } from "../controllers/pokemon.js";

const routerPokemon = express.Router();

routerPokemon.route("/").get(getRoster).post(addPokemon);

export default routerPokemon;

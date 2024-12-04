import { Schema, model } from "mongoose";

const pokemonSchema = new Schema({
  name: { type: String, required: true, unique: true },
  image: { type: String, required: true },
  dateAdded: { type: Date, default: Date.now },
});

const Pokemon = model("Pokemon", pokemonSchema);

export default Pokemon;

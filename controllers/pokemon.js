import Pokemon from "../models/pokemon.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

// Add a Pokémon to the roster
export const addPokemon = asyncHandler(async (req, res) => {
  const { name, image } = req.body;

  if (!name || !image) {
    throw new ErrorResponse("Please provide all required fields", 400);
  }

  // Check if Pokémon already exists
  const existingPokemon = await Pokemon.findOne({ name });
  if (existingPokemon) {
    throw new ErrorResponse("Pokémon is already in the roster", 400);
  }

  const newPokemon = await Pokemon.create({ name, image });
  res.status(201).json(newPokemon);
});

// Get all Pokémon in the roster
export const getRoster = asyncHandler(async (req, res) => {
  const roster = await Pokemon.find();
  res.status(200).json(roster);
});

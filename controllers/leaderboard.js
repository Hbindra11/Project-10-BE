import Leaderboard from "../models/leaderboard.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const createScore = asyncHandler(async (req, res) => {
  const {
    body: { username, score },
  } = req;

  if (!username || !score)
    throw new ErrorResponse("please provide all required fields", 400);
  let noOfDocs = await Leaderboard.countDocuments();
  const newId = noOfDocs + 1; //generating a new id based on number of documents in collection
  const newScore = await Leaderboard.create({ _id: newId, username, score });
  res.status(201).json(newScore);
});

export const getScores = asyncHandler(async (req, res) => {
  const scores = await Leaderboard.find();
  res.status(201).json(scores);
});

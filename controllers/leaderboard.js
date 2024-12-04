import Leaderboard from "../models/leaderboard.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const createScore = asyncHandler(async (req, res) => {
  const {
    body: { username, score },
  } = req;

  if (!username || !score)
    throw new ErrorResponse("please provide all required fields", 400);
  const { _id } = await Leaderboard.findOne({}, {}, { sort: { _id: -1 } });//returns the largest _id so that the next new one can be created
  //let noOfDocs = await Leaderboard.countDocuments();
  const newId = _id + 1; //generating a new id based on number of documents in collection but is risky because may get duplicates if a doc is deleted
  const newScore = await Leaderboard.create({ _id: newId, username, score });
  res.status(201).json(newScore);
});

export const getScores = asyncHandler(async (req, res) => {
  const scores = await Leaderboard.find().sort({ score: -1 }); //returns query result showing scores in sorted order greatest first
  //console.log(_id);
  res.status(201).json(scores);
});

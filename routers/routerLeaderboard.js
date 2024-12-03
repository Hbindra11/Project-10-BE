import express from "express";
import { createScore, getScores } from "../controllers/leaderboard.js";

const routerLeaderboard = express.Router();
routerLeaderboard.route("/").get(getScores).post(createScore);

export default routerLeaderboard;

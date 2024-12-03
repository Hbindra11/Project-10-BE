import { Schema, model } from "mongoose";

const leaderboardSchema = new Schema(
  {
    _id: { type: Number, required: true },
    username: { type: String, required: true },
    score: { type: Number, required: true },
    date: { type: Date, default: Date.now() },
  },
  { timeseries: true }
);

const Leaderboard = model("Leaderboard", leaderboardSchema);

export default Leaderboard;

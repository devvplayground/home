const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  playerId: { type: String, required: true },
  carriedAmmo: { type: Number, required: true },
  grenades: { type: Number, required: true },
  health: { type: Number, required: true },
  locationX: { type: Number, required: true },
  locationY: { type: Number, required: true },
  locationZ: { type: Number, required: true },
  score: { type: Number, required: true },
  weaponAmmo: { type: Number, required: true },
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;

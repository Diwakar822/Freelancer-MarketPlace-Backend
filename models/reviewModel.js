const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  // freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  // clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: false },
  freelancerName:{type:String ,required: false},
  rating: { type: Number, required: true, min: 1, max: 5 },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Review", reviewSchema,'review');
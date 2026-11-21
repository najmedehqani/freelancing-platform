const mongoose = require("mongoose");
const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    englishTitle: { type: String, required: true, unique: true },
    description: { type: String, required: true, trim: true, lowercase: true },
    coverImage: {
      type: String,
      default: null,
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

CategorySchema.index({ title: "text", englishTitle: "text" });

module.exports = {
  CategoryModel: mongoose.model("Category", CategorySchema),
};

const mongoose = require("mongoose");
const URLSlugs = require("mongoose-url-slugs");
const mongoCursor = require("mongo-cursor-pagination");
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    tag: { type: String, default: "brak" },
  },
  {
    timestamps: true,
  }
);
PostSchema.index({ title: "text" });
PostSchema.plugin(URLSlugs("title", { field: "slug", update: true }));
PostSchema.plugin(mongoCursor.mongoosePlugin);

module.exports = mongoose.model("Post", PostSchema);

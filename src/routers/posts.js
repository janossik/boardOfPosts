const { Router } = require("express");
const controller = require("../controllers/posts.controller");
const catchAsync = require("../middlewares/catchAsync");
const getFilters = require("../middlewares/fillterPosts");

module.exports = () => {
  const api = Router();
  api.get("/search", getFilters, catchAsync(controller.findAllSearch));

  api.post("/", catchAsync(controller.create));

  api.get("/:slug", catchAsync(controller.findOne));

  api.put("/:slug", catchAsync(controller.update));

  api.delete("/:slug", catchAsync(controller.remove));

  api.get("/", getFilters, catchAsync(controller.findAll));

  return api;
};

const modelPost = require("../models/post.model");
const qs = require("qs");
const _ = require("lodash");
console.log(qs);

module.exports = (req, res, next) => {
  const availableFilters = Object.keys(modelPost.schema.paths);
  const filters = qs.parse(req.query);
  req.filters = _.pickBy(
    filters,
    (value, key) => availableFilters.indexOf(key) > -1
  );
  next();
};

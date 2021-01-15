const modelPost = require("../models/post.model");
const qs = require("qs");
const _ = require("lodash");
console.log(qs);

module.exports = (req, res, next) => {
  const availableFilters = Object.keys(modelPost.schema.paths);
  const filters = qs.parse(req.query);
  const schemaFilter = _.pickBy(
    filters,
    (value, key) => availableFilters.indexOf(key) > -1
  );
  let serchFilter = {};

  if (filters.q) {
    serchFilter = {
      $text: {
        $search: filters.q,
      },
    };
  }
  req.filters = Object.assign(serchFilter, schemaFilter);
  next();
};

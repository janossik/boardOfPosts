const modelPost = require("../models/post.model");

const userEnters = (req) => {
  const obj = {};
  const allowed = ["slug", "title", "author", "body", "tag"];
  for (const iterator of allowed) {
    if (req.body[iterator]) {
      console.log(req.body[iterator]);
      obj[iterator] = req.body[iterator];
    }
  }
  return obj;
};

module.exports = {
  async findOne(req, res, next) {
    let result = await modelPost.findOne({ slug: req.params.slug });
    if (!result) {
      result = await modelPost.findOne({ _id: req.params.slug });
    }
    if (!result) return next();
    return res.status(200).send({ data: result });
  },
  async findAll(req, res) {
    const resultPromise = modelPost.paginate({
      limit: parseInt(req.query.per_page, 10) || 2,
      previous: req.query.previous || null,
      next: req.query.next || null,
    });
    const countPromise = modelPost.countDocuments();
    const [result, count] = await Promise.all([resultPromise, countPromise]);
    const links = {};
    if (result.hasNext) {
      links.next = `${req.protocol}://${req.get("host")}${req.path}?next=${
        result.next
      }`;
    }
    if (result.hasPrevious) {
      links.previous = `${req.protocol}://${req.get("host")}${
        req.path
      }?previous=${result.previous}`;
    }
    res.links(links);
    res.set("total-count", count);
    return res.status(200).send({ data: result.results });
  },
  async findAllFilter(req, res) {
    const offset = parseInt(req.query.offset) || 0;
    const per_page = parseInt(req.query.per_page) || 2;
    const sort_by = {};
    sort_by[req.query.sort_by || "createdAt"] = req.query.order_by || "desc";

    const resultPromise = modelPost
      .find(req.filters)
      .skip(offset)
      .limit(per_page)
      .sort(sort_by);
    const countPromise = modelPost.countDocuments(req.filters);
    const [result, count] = await Promise.all([resultPromise, countPromise]);
    return res.status(200).send({ data: result, count });
  },
  async create(req, res) {
    const result = await new modelPost(userEnters(req));
    await result.save();
    return res.status(201).send("Done!");
  },
  async update(req, res, next) {
    const update = await userEnters(req);
    let result = await modelPost.updateOne({ slug: req.params.slug }, update);
    if (!(await modelPost.findOne({ slug: req.params.slug }))) {
      result = await modelPost.updateOne({ _id: req.params.slug }, update);
    }
    if (!result) return next();

    return res.status(200).send("Done!");
  },
  async remove(req, res, next) {
    let result = await modelPost.deleteOne({ slug: req.params.slug });
    if (!(await modelPost.findOne({ slug: req.params.slug }))) {
      result = await modelPost.deleteOne({ _id: req.params.slug });
    }
    if (!result) return next();
    return res.status(200).send("Done!");
  },
};

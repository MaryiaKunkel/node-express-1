const express = require("express");
const router = express.Router();
let axios = require("axios");
const ExpressError = require("./expressError");

router.post("/", async function (req, res, next) {
  try {
    // If there is no 'name in req.body, throw an error
    if (!req.body.developers)
      throw new ExpressError("Developer's name is required", 400);
    // User Promise.all to fetch all the data at the same time
    let results = await Promise.all(
      req.body.developers.map(async (username) => {
        const resp = await axios.get(
          `https://api.github.com/users/${username}`
        );
        return {
          name: resp.data.name,
          bio: resp.data.bio,
        };
      })
    );

    //Send the response as JSON
    return res.json(results);
  } catch (err) {
    return next(err);
  }
});

module.exports = router;

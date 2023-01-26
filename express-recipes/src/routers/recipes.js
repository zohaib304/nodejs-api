const express = require("express");
const { getAll, save, get, update, remove } = require("../controllers/recipes");
const router = express.Router();



router.route("/").get(getAll).post(save)
router.route("/:id").get(get).put(update).delete(remove)

// Export the router
module.exports = router;
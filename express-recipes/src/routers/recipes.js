const express = require("express");
const auth = require('../middlewares/auth');
const { getAll, save, get, update, remove } = require("../controllers/recipes");
const router = express.Router();



router.route('/').get(getAll).post(auth.authenticate(), save);
router.route("/:id").get(get).put(auth.authenticate(), update).delete(auth.authenticate(), remove)

// Export the router
module.exports = router;
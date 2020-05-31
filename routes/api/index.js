const path = require("path");
const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//book route, google route, home page
router.use("/books", bookRoutes);


router.use("/google", googleRoutes);


router.use(function(_req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});

module.exports = router;
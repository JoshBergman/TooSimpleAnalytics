const express = require("express");
const router = express.Router();

const viewCount = require("../Controllers/viewCount");
const newSite = require("../Controllers/newSite");

//*current route: .../api/users/new path here

//API operations
router.get("/view/:sid", viewCount.newView); //registers new view to site

router.post("/new/site/:sid", newSite.newSite); //registers new site for views to be added

module.exports = router;

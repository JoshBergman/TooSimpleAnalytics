const { MongoClient } = require("mongodb");
const uri = require("./MONGO_URI");

const client = new MongoClient(uri);
const dbname = "std1";
const collectionName = "viewLog";

const stdCollection = client.db(dbname).collection(collectionName);

const newSite = async (req, res, next) => {
  const siteID = req.params.sid;

  try {
    let exists = await stdCollection.findOne({ siteID: siteID });

    if (exists === null) {
      const newSiteDoc = {
        siteID: siteID,
        views: 0,
      };
      let result = await stdCollection.insertOne(newSiteDoc);

      if (result.acknowledged) {
        res.json({ status: 200, newSiteCreated: "True" }).status(200);
      } else {
        res
          .json({
            status: 500,
            newSiteCreated: "False",
            message: "Server Error. Please Try Again Later.",
          })
          .status(500);
      }
    } else {
      res
        .json({
          status: 400,
          newSiteCreated: "False",
          message: "Site already exists.",
        })
        .status(400);
    }
  } catch (err) {
    res.json({ status: 500, newSiteCreated: "False" }).status(500);
  }
};

exports.newSite = newSite;

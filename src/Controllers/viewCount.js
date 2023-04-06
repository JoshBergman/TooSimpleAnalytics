const { MongoClient } = require("mongodb");
const uri = require("./MONGO_URI");

const client = new MongoClient(uri);
const dbname = "std1";
const collectionName = "viewLog";

const stdCollection = client.db(dbname).collection(collectionName);

const addView = async (req, res, next) => {
  const siteID = req.params.sid;

  try {
    let result = await stdCollection.updateOne(
      { siteID: siteID },
      { $inc: { views: 1 } }
    );
    res.json({ status: 200 }).status(200);
  } catch (err) {
    res.json({ status: 500 }).status(500);
  }
};

exports.newView = addView;

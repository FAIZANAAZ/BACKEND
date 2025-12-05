
const db = require("../db/connection.js");
const { urlTable } = require("../model/url.model.js");

exports.CreateUrlData = async (longUrl, shortId,userid) => {
  const [result]=await db.insert(urlTable).values({
    longUrl: longUrl,
    shortId: shortId,
    userId: userid
  }).returning();

  return result;

}
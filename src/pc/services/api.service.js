const feedService = require("./feed.service");
const hashtagService = require("./hashtag.service");

module.exports = {
  mixins: [feedService, hashtagService]
};

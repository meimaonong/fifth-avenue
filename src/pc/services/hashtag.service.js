const { HASHTAG_BASE_URL } = require("./../config/api.conf");

module.exports = {
  title: "hashtag相关服务",
  version: "1.0.0",
  status: "online",
  type: "https",
  base_url: {
    online: HASHTAG_BASE_URL
  },
  services: [
    {
      name: "获取tag",
      id: "hashtag.getTag",
      urls: {
        online: "/getTag"
      }
    },
    {
      name: "获取tag",
      id: "hashtag.getTagList",
      urls: {
        online: "/getTagList"
      }
    }
  ]
};

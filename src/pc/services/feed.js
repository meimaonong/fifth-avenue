const BASE_URL = require("./../config/api.conf");

module.exports = {
  title: "feed相关服务",
  version: "1.0.0",
  status: "online",
  type: "https",
  base_url: {
    online: BASE_URL.FEED_BASE_URL
  },
  interfaces: [
    {
      name: "feed描述",
      id: "feed.des",
      urls: {
        online: "/des"
      }
    },
    {
      name: "feed列表",
      id: "feed.feedList",
      urls: {
        online: "/feedList"
      }
    },
    {
      name: "添加feed",
      id: "feed.addFeed",
      urls: {
        online: "/addFeed"
      },
      method: "post"
    }
  ]
};

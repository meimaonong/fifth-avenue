const { FEED_BASE_URL } = require("./../config/api.conf");

module.exports = {
  name: "feed相关服务",
  version: "1.0.0",
  status: "online",
  type: "https",
  base_url: {
    online: FEED_BASE_URL
  },
  services: [
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
  ],
  combo: {
    getMyData: ["feed.des", "feed.feedList"]
  }
};

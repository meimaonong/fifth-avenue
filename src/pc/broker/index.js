const Koa = require("koa");
const app = new Koa();
const router = require("koa-router");

class ServiceBroker {
  createService(services) {
    app.use(ctx => {
      ctx.body = "ctxbody";
    });

    const port = 3002;
    app.listen(port, () => {
      console.log(`Listen on ${port}`);
    });
  }
}
module.exports = ServiceBroker;

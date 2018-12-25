const Koa = require("koa");
const app = new Koa();

app.use(ctx => {
  ctx.body = "ctxbody";
});

const port = 3002;

app.listen(port, () => {
  console.log(`Listen on ${port}`);
});

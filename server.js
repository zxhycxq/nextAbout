const koa = require("koa");
const next = require("next");
const Router = require("koa-router");

const dev = process.env.NODE_ENV != "production";
const app = next({ dev });

const handle = app.getRequestHandler();

const server = new koa();
const router = new Router();
router.get("/test:id", ctx => {
  ctx.body = `<span>时间-${ctx.params.id}</span>`;
});
server.use(async (ctx, next) => {
  await next();
});
// app.prepare().then(() => {
//   server.use(async (ctx, next) => {
//     await handle(ctx.req,  ctx.res)
//     console.log(`%c--ctx-- `, 'color:blue;',ctx)
//     ctx.respond = false
//   });
//   server.listen(3000, () => {
//     console.log(`%c--3000-- `, 3000)
//   })
// })
server.use(router.routes());

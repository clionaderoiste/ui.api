const Koa = require('koa');
const route = require('koa-route');
const app = new Koa();

// x-response-time

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async function (ctx, next) {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response

app.use(ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
console.log('Koa listening on port 3000');
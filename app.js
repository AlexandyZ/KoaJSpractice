// import koa2. In koa2, we import a class Koa
const Koa = require('koa');

// create a Koa object as the web app
const app = new Koa();

// app calls the async function to deal with http requests
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`);
    await next();
    console.log('finished...');
});

app.use(async (ctx, next) => {
    const start = new Date().getTime();
    await next();
    const ms = new Date().getTime() - start;
    console.log('Consumed time:', `${ms}ms`);
});

app.use(async (ctx, next) => {
    await next(); // call the next async function(middleware)
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
});

// listen port 3000
app.listen(3000);
console.log('app started at port 3000...');
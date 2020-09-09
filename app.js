const Koa = require('koa');

const app = new Koa();

app.use(async ctx => {
    ctx.body = 'hello, docker, jenkins'
})

app.listen(3010, () => {
    console.log('服务3010端口已启动')
})
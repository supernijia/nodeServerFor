//创建web服务器
const express = require('express');

//使用日志
const logger = require('morgan');

//处理post请求
const bodyParser = require('body-parser');


//引入路由文件
const router = require('./router/Router')

//执行express全局函数，返回一个express服务器对象
const app = express();

//设置跨域访问
app.all("*",function(req,res,next){
    //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Origin","*");
    //允许的header类型
    res.header("Access-Control-Allow-Headers","content-type");
    //跨域允许的请求方式 
    res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200);  //让options尝试请求快速结束
    else
        next();
})


//日志模块（必需放在配置的最前方，否则不起作用）
app.use(logger('dev'));

//配置body-parser
app.use(bodyParser.urlencoded({extended: true}));

//使用路由
app.use(router);

//配置静态资源
app.use(express.static(__dirname + '/public'));


//启动服务器
app.listen(8888, function(){
    console.log('YelpCamp Server has started');
});
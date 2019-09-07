var express = require("express");
var app =express();
var crypto=require("crypto");
var mongoose=require("mongoose");
var bodyParser = require("body-parser");
var uE=bodyParser.urlencoded({extended:false});
var jwt=require("jsonwebtoken");
var User = mongoose.model("vip01",{
    vipName:String,
    vipPsd:String,
    vipem:String
})
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');    
    next();
})
app.post("/login",uE,function(req,res){
    var psd = req.body.upsd;
    var uemail = req.body.uemail;
    var newpsd = crypto.createHash('md5').update(psd).digest('hex');
    mongoose.connect("mongodb://localhost:27017/bb",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败");
        }else{
            console.log("数据库连接成功");
            User.find({vipem:uemail}).then((ok)=>{
                if(ok.length>0){
                    // console.log(ok[0].vipName);
                    var uname=ok[0].vipName;
                    var obj={
                        loginok:true,
                        uname
                    };
                    var mi = "fas5fas5fa5sfaa33";
                    var token = jwt.sign(obj,mi);
                    res.send({mes:"登录成功",status:200,linkid:3,token})
                }else if(ok.length==0){
                    res.send({mes:"登录失败",status:200,linkid:4})
                }
            })
        }
    })
})
app.post("/reg",uE,function(req,res){
    var uname = req.body.uname;
    var psd = req.body.upsd;
    var uemail = req.body.uemail;
    var newpsd = crypto.createHash('md5').update(psd).digest('hex');
    mongoose.connect("mongodb://localhost:27017/bb",{useNewUrlParser:true},function(err){
        if(err){
            console.log("数据库连接失败")
        }else{
            console.log("数据库连接成功")
            User.find({vipem:uemail}).then((ok)=>{
                if(ok.length>0){
                    res.send({mes:"该邮箱已注册",status:200,linkid:1})
                }else if(ok.length == 0){
                    var haha = new User({
                        vipName:uname,
                        vipPsd:newpsd,
                        vipem:uemail
                    });
                    haha.save().then((oks)=>{
                        res.send({mes:"注册成功",status:200,linkid:2});
                    },(err)=>{
                        res.send({mes:"注册失败",status:200,linkid:0});
                    })
                }
            })
        }
    })
})
app.get("/shouye",function(req,res){
    var token = req.query.token;
    var mi = "fas5fas5fa5sfaa33";
    jwt.verify(token,mi,function(err,data){
        console.log(data);
        if(data.loginok == true){
            res.send({mes:"用户登陆过",status:200,linkid:5,username:data.uname});
        }else{
            res.send({mes:"用户没有登陆过",status:500,linkid:6});
        }
    })
})

app.listen(3000);
<template>
    <div style="font-size:0">
        <h1 class="title">
            <a @click="fungo()" href="#">取消</a>
            登录豆瓣
        </h1>
        <div class="tishi">{{text}}</div>
        <input type="email" v-model="emval" placeholder="邮箱"/>
        <input :type="bool?'password':'text'" v-model="psdval" placeholder="密码"/>
        <span @click="funbool()">
            <img src="../../static/img/yanjing.png" v-if="bool">
            <img src="../../static/img/show-pwds.png" v-else>
        </span>
        <input type="button" value="登录" @click="fun()"/>
        <p>使用其他方式登录 & 找回密码</p>
        <div class="footer">
            <a href="#" @click="funreg()">注册豆瓣账号</a>
            <a href="#" @click="funhome()">下载豆瓣App</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            emval:"",
            psdval:"",
            text:"",
            bool:true
        }
    },
    methods: {
        funhome(){
            this.$router.push("/shouye")
        },
        funreg(){
            this.$router.push("/reg")
        },
        fungo(){
            this.$router.go(-1);
        },
        funbool(){
            this.bool=!this.bool;
        },
        fun(){
            // this.$router.push("/shouye");
            if(this.emval == "" || this.pasval == ""){
                this.text = "请把信息填写完整";
            }else{
                let param = new URLSearchParams();
                param.append("uemail",this.emval);
                param.append("upsd",this.pasval);
                this.axios.post("http://localhost:3000/login",param).then((data)=>{
                    // console.log(data.data.token);
                    if(data.data.linkid == 3){
                        window.localStorage.setItem("token",data.data.token);
                        var i = 4;
                        var mytimer = setInterval(()=>{
                            i--;
                            if(i == 0){
                                clearInterval(mytimer);
                                this.$router.push("/shouye");
                            }
                            this.text = "登录成功"+i+"秒后跳转到首页";
                        },1000)
                    }else if(data.data.linkid == 4){
                        this.text = "账号或密码错误";
                    }
                    
                },(err)=>{
                    console.log(err);
                })
            }
        }
    }
}
</script>

<style scoped>
    .title{
        width: 100%;
        height: .5rem;
        font-size: .2rem;
        text-align: center;
        line-height: .5rem;
        border-bottom: 1px solid #eee;
    }
    .title>a{
        color: #42bd56;
        font-size: .15rem;
        position: absolute;
        left:.2rem;
    }
     input{
        width: 87%;
        height: .5rem;
        margin: 0 5%;
        border: 1px solid #ccc;
        font-size: .18rem;
        padding-left: 3%; 
    }
    input[type="email"]{
        margin-top: .4rem;
    }
    input[type="button"]{
        margin-top: .15rem;
        margin-bottom: .24rem;
        color: #fff;
        background-color: #42bd56;
        border-radius: 5px;
    }
    img{
        width: 0.5rem;
        height: .5rem;
        position: fixed;
        right: .2rem;
        top: 1.4rem;
    }
    p{
        width: 100%;
        font-size: .15rem;
        color: #aaaaaa;
        text-align: center;
    }
    .footer{
        width: 100%;
        margin-top: .5rem;
        text-align: center;
    }
    .footer a{
        font-size: .15rem;
        color: #42bd56;
        margin-right: .15rem;
    }
    .tishi{
        width: 100%;
        font-size: .2rem;
        color: red;
        text-align: center;
        position: absolute;
        top:.6rem;
    }
</style>
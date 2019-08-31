<template>
    <div style="font-size:0">
        <p class="huitui" @click="funhui()">←</p>
        <p class="title">欢迎加入豆瓣</p>
        <div class="tishi">{{text}}</div>
        <input type="email" v-model="emval" placeholder="邮箱">
        <input :type="bool?'password':'text'" v-model="pasval" placeholder="密码">
        <span @click="funbool()">
            <img src="../../static/img/yanjing.png" v-if="bool">
            <img src="../../static/img/show-pwds.png" v-else>
        </span>
        <input type="text" v-model="userval" placeholder="用户名">
        <input type="button" value="立即注册" @click="fun()">
        <p class="footer">点击「注册」代表你已阅读并同意用户使用协议</p>
        <a class="xiaapp" href="#">下载豆瓣App</a>
    </div>
</template>

<script>
export default {
    data(){
        return{
            emval:"",
            pasval:"",
            userval:"",
            text:"",
            bool:true
        }
    },
    methods:{
        funhui(){
            this.$router.go(-1);
        },
        funbool(){
            this.bool=!this.bool;
        },
        fun(){
            if(this.emval == "" || this.pasval == "" || this.userval == ""){
                this.text = "请把信息填写完整";
            }else{
                let param = new URLSearchParams();
                param.append("uemail",this.emval);
                param.append("upsd",this.pasval);
                param.append("uname",this.userval);
                this.axios.post("http://localhost:3000/reg",param).then((data)=>{
                    // console.log(data.data.linkid);
                    if(data.data.linkid==1){
                        this.text = "该邮箱已注册，请登录或换个邮箱注册";
                    }else if(data.data.linkid==2){
                        var i = 4;
                        var mytimer = setInterval(()=>{
                            i--;
                            if(i == 0){
                                clearInterval(mytimer);
                                this.$router.push("/login");
                            }
                            this.text = "注册成功"+i+"秒后跳转到登录页面";
                        },1000)
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
    .huitui{
        width: .3rem;
        height: .3rem;
        border-radius: 50%;
        background-color: pink;
        color: red;
        font-size: .2rem;
        text-align: center;
        line-height: .3rem;
        position: absolute;
        top: 0px;
    }
    .title{
        width: 100%;
        height: .46rem;
        font-size: .4rem;
        text-align: center;
        margin: .35rem 0;
        color: #42bd56;
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
        margin-top: .24rem;
    }
    input[type="button"]{
        margin-top: .15rem;
        margin-bottom: .24rem;
        color: #fff;
        background-color: #42bd56;
    }
    img{
        width: 0.5rem;
        height: .5rem;
        position: fixed;
        right: .2rem;
        top: 1.92rem
    }
    .footer{
        font-size: .14rem;
        color: #aaaaaa;
        text-align: center;
    }
    .xiaapp{
        font-size: .16rem;
        color: #42bd56;
        text-align: center;
        display: block;
        margin-top: .6rem;
    }
    .tishi{
        width: 100%;
        font-size: .2rem;
        color: red;
        text-align: center;
        position: absolute;
        top:1rem;
    }
</style>
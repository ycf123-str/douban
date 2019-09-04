<template>
    <div>
        <div class="head">
            <span @click="fun()">关闭</span>
            <input type="text" @focus="bool=!bool" @blur="bool=!bool">
            <img class="imga" v-if="bool" src="../../static/img/sou.png">
        </div>
        <div class="con">
            <a class="box" v-for="(v,i) in arr" :key="i" :href="v.url">
                <p :style="{color:v.color}">{{v.name}}</p>
                <span>{{v.des}}</span>
            </a>
        </div>
        <div class="bot">
            <div class="nav">
                <a href="#/reg">注册账号</a>
                <a href="#/login">登录豆瓣</a>
            </div>
            <div class="nav">
                <a href="#">使用桌面板</a>
                <a href="#">使用豆瓣App</a>
            </div>
        </div>
    </div>
</template>

<script>
import linkNav from '../components/linknav'
export default {
    components:{
        linkNav
    },
    methods:{
       fun(){
           this.$router.go(-1);
       }     
    },
    created(){
        this.axios({
            url:"/searchClass",
            method:"get"
        }).then((data)=>{
            // console.log(data);
            this.arr = data.data;
        })
    },
    data(){
        return{
            arr:[],
            bool:true
        }
    }
}
</script>

<style scoped>
.imga{
    width: .24rem;
    height: .24rem;
    position: absolute;
    top:.2rem;
    right:40%;
}
    .head{
        padding: 0 .2rem;
        height: .6rem;
        line-height: .6rem;
        font-size: 0;
        border-bottom: 1px solid #f3f3f3;
    }
    .head>span{
        font-size: .16rem;
        color: #42bd56;
        margin-right: .1rem;
    }
    .head>input{
        width: 2.8rem;
        height: .38rem;
        /* outline: none; */
        border: none;
        background: #f3f3f3;
        font-size: .18rem;
        padding-left: .1rem;
    }
    .con{
        font-size: 0;
        border-bottom: 1px solid #f3f3f3;
    }
    .box{
        width: 33%;
        display: inline-block;
        text-align: center;
        margin:.3rem 0;
    }
    .box>p{
        font-size: .24rem;
    }
     .box>span{
        font-size: .12rem;
        color:#999;
    }

    .nav{
        padding: .15rem 0;
        font-size: 0;
    }
    .nav>a{
        display: inline-block;
        font-size: .15rem;
        color: #42bd56;
        width: 49%;
        text-align: center;
    }
    .nav>a:nth-child(1){
        border-right:1px solid #f3f3f3;
    }
</style>
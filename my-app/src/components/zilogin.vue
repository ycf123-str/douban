<template>
    <div class="head">
        <img v-if="text" class="img" src="../../static/img/avatar.9297a89.png">
        <img v-else class="img" src="../../static/img/meideng.jpg">
        <span v-if="text">{{text}}</span>
        <span v-else>请先登录</span>
        <img src="../../static/img/icon-pen.svg">
        <img src="../../static/img/icon-camera.svg">
    </div>
</template>
<script>
export default {
    created(){
        var localtoken=window.localStorage.getItem("token");
        if(localtoken){
            this.axios({
                method:"get",
                url:"http://localhost:3000/shouye",
                params:{
                    token:localtoken
                }
            }).then((ok)=>{
                // console.log(ok.data.username);
                if(ok.data.linkid==5){
                    this.text=ok.data.username;
                }
            })
        }
    },
    data(){
        return{
            text:""
        }
    }
}
</script>
<style scoped>
    .head{
        padding:.2rem .3rem;
        font-size: 0;
        border-bottom: 1px solid #aaaaaa;
    }
    .head .img{
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
    }
    .head>img{
        vertical-align: middle;
        width: .36rem;
        height: .36rem;
        margin-right: .15rem;
    }
    .head>span{
        font-size: .15rem;
        color: #aaaaaa;
        vertical-align: middle;
        margin-right: .9rem;
    }
</style>
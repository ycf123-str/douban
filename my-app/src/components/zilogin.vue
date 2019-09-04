<template>
    <div class="head">
        <img class="img" src="../../static/img/meideng.jpg">
        <span>{{title}}</span>
        <img src="../../static/img/icon-pen.svg">
        <img src="../../static/img/icon-camera.svg">
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
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
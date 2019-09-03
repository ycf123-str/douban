<template>
    <div class="head">
        <a href="#">{{tit}}</a>
        <a href="#">极速下载</a>
        <a href="#">打开</a>
    </div>
</template>
<script>
export default {
    props:{
        tit:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .head{
        margin-top: .6rem;
        width: 100%;
        height: .8rem;
        background-image: url(../../static/img/promotion_bg.b7abee9.jpg);
        background-size: cover;
        font-size: 0;
        line-height: 1rem;
    }
    .head>a:nth-child(1){
        font-size: .14rem;
        color: #2ca532;
        margin: 0 .5rem ;
    }
    .head>a:nth-child(2){
        font-size: .14rem;
        color: #fff;
        background-color: #42bd56;
        width: .8rem;
        height: .3rem;
        text-align: center;
        line-height: .3rem;
        display: inline-block;
        border-radius: 5px;
        margin: .1rem;
    }
    .head>a:nth-child(3){
        font-size: .14rem;
        color: #42bd56;
        border:1px solid #42bd56;
        background-color: #fff;
        width: .6rem;
        height: .3rem;
        text-align: center;
        line-height: .3rem;
        display: inline-block;
        border-radius: 5px;
    }
</style>
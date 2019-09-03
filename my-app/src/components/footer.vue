<template>
    <div class="head">
        <div class="top">
            <img src="../../static/img/doudou.png">
            <div class="right">
                <h1>豆瓣</h1>
                <p>我们的精神角落</p>
            </div>
        </div>
        <div class="bot">
            <a href="#">去 App Store 免费下载 iOS 客户端</a>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .head{
        width: 100%;
        margin: .6rem 0;
        text-align: center;
        font-size: 0;
    }
    img{
        width: .6rem;
        height: .6rem;
        display: inline-block;
        vertical-align: top;
        margin-right: .2rem;
    }
    .right{
        display: inline-block;
        vertical-align: top;
    }
    .right>h1{
        font-size: .2rem;
        text-align: left;
    }
    .right>p{
        font-size: .2rem;
    }
    .bot{
        margin-top:.3rem;
    }
    a{
        font-size: .16rem;
        color: #42bd56;
    }
</style>
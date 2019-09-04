<template>
    <div>
        <div class="head" v-for="(v,i) in 9" :key="i">
            <div class="top">
                <img src="../../static/img/doudou.png">
                <strong>豆瓣</strong><span>写了日记</span>
                <p>2017-03-01 19:30:41</p>
            </div>
            <div class="bot">
                <h3>豆瓣App 4.12.0 主要更新</h3>
                <p>- 可以写读书笔记了，同时支持编辑。随时随地，摘录怦然心动的段落，写下阅读时的随感。来写笔记吧，你...</p>
            </div>
            <div class="info">
                <span>
                    <img src="../../static/img/ic_like_gray.svg">4
                </span>
                <span>
                    <img src="../../static/img/ic_comment.svg">0
                </span>
                <span>
                    <img src="../../static/img/ic_retweet_gray.svg">1
                </span>
                <img class="imga" src="../../static/img/ic_more.svg">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .head{
        margin: .22rem;
        padding: 0 0 .2rem .6rem;
        font-size: 0;
         border-bottom: 1px solid #d8d8d8;
    }
    /* .top{
        font-size: 0;
    } */
    .top>img{
        width: .48rem;
        height: .48rem;
        border-radius: 50%;
        margin-left: -.55rem;
        margin-right: .1rem;
    }
    .top>strong{
        font-size: .2rem;
        color: #494949;
        vertical-align: top;
    }
    .top>span{
        font-size: .2rem;
        color: #aaaaaa;
        vertical-align: top;
    }
    .top>p{
        font-size: .14rem;
        color: #aaaaaa;
        margin-top: -0.2rem;
    }
    .bot{
        margin: .12rem 0 .24rem;
        padding: .2rem;
        border: 1px solid #d8d8d8;
    }
    .bot>h3{
        font-size: .17rem;
        color: #494949;
        margin-bottom: .1rem;
    }
    .bot>p{
        font-size: .14rem;
        color: #aaaaaa;
    }
    .info>span img{
        width: .24rem;
        height: .24rem;
        vertical-align: bottom;
        margin-right: .05rem;
    }
    .info>span{
        font-size: .2rem;
        color: #cccccc;
        vertical-align: bottom;
        margin-right: .2rem;
    }
    .imga{
         width: .24rem;
        height: .24rem;
        float: right;
    }
</style>
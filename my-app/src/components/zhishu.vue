<template>
    <div>
        <div class="tit">
            <span>豆瓣纸书</span>
            <a href="#">更多</a>
        </div>
        <div class="content">
            <img src="../../static/img/book_zw.fc645eb.jpg">
            <div class="rig">
                <h3>造物</h3><span>￥68</span>
                <p>改变世界的万物图典，3000幅图里的发明与冒险</p>
            </div>
        </div>
        <div style="display:flex;overflow:auto">
            <div class="ban" v-for="(v,i) in ziarr" :key="i">
                <img :src="v.images.medium">
                <p>{{v.title}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props:{
       ziarr:{
           type:Array,
           required:true
       }
   }
}
</script>
<style scoped>
    .tit{
        margin: 0 5%;
        display: flex;
        justify-content:space-between;
    }
    .tit>span{
        font-size: .16rem;
        color: #111111;
    }
    .tit>a{
        font-size: .14rem;
        color: #42bd56;
    }
    .content{
        margin: .1rem 5%;
        display: flex;
    }
    .content>img{
        width: 1.5rem;
        height: 2rem;
    }
    .rig{
        padding:.2rem;
        font-size: 0;
    }
    .rig>h3{
        font-size: .2rem;
        display: inline-block;
        font-weight: 100;
        color: #494949;
    }
    .rig>span{
        float:right;
        font-size: .16rem;
        color: #e76648;
    }
    .rig>p{
        margin-top:.15rem;
        font-size: .16rem;
        color: #9b9b9b;
    }
    .ban{
        width: 35%;
        margin-right: .1rem;
        font-size: 0;
        flex-shrink: 0;
    }
    .ban>img{
        width: 100%;
        height: 1.8rem;
        margin: .1rem 0;
    }
    .ban>p{
        font-size: .16rem;
        color: #111111;
        text-align: center;
    }
</style>
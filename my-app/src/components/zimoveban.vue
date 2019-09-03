<template>
<div>
    <div class="head">
        <div class="tit">
            <span>{{title}}</span>
            <a href="#">更多</a>
        </div>
        <div style="display:flex;overflow:auto">
            <div class="ban" v-for="(v,i) in ziarr" :key="i">
                <img :src="v.images.medium">
                <p>{{v.title}}</p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
export default {
   props:{
       title:{
           type:String,
           required:true
       },
       ziarr:{
           type:Array,
           required:true
       }
   }
}
</script>
<style scoped>
    .head{
        margin: 5%;
    }
    .tit{
        width: 100%;
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
    .ban{
        width: 35%;
        margin-right: .1rem;
        font-size: 0;
        flex-shrink: 0;
    }
    .ban>img{
        width: 100%;
        height: 1.8rem;
    }
    .ban>p{
        font-size: .16rem;
        color: #111111;
        text-align: center;
    }
</style>
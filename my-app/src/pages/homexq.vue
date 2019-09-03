<template>
    <div>
        <link-nav></link-nav>
        <xiazaiapp tit="每日看点好内容"></xiazaiapp>
        <div class="info">
            <h2>{{arrs[0].title}}
                <span>{{arrs[0].loc_name}}</span>
            </h2>
            <div class="imgbox">
                <img :src="arrs[0].image">
            </div>
        </div>
    </div>
</template>
<script>
import linkNav from '../components/linknav'
import xiazaiapp from '../components/xiazaiapp'
export default {
    components:{
        linkNav,
        xiazaiapp
    },
    created(){
        this.arrs=this.$route.params.arr;
        console.log(this.arrs)
    },
    data(){
        return{
            arrs:[]
        }
    }
}
</script>
<style scoped>
    .info{
        margin: .2rem;
    }
    .info>h2{
        font-size: .18rem;
        color:#494949;
    }
    .info>h2>span{
        display: block;
        font-size: .12rem;
        color:#fff;
        width: .36rem;
        height: .26rem;
        text-align:center;
        line-height: .26rem;
        background: #ff8263;
    }
    .imgbox{
        text-align: center;
        margin: .3rem 0;
    }
    .imgbox>img{
        width: 2.6rem;
        height: 3.6rem;
    }
</style>
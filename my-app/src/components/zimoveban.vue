<template>
<div>
    <div class="head">
        <div class="tit">
            <span>{{title}}</span>
            <a href="#">更多</a>
        </div>
        <div style="display:flex;overflow:auto">
            <div class="ban" v-for="(v,i) in ziarr" :key="i" @click="fun(i)">
                <img :src="v.images.medium">
                <p>{{v.title}}</p>
                <wuxing :value="v.rating.average/2" :aaaa="v.rating.average"></wuxing>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import wuxing from './fiveStarts'
export default {
    components:{
        wuxing
    },
   props:{
       title:{
           type:String,
           required:true
       },
       ziarr:{
           type:Array,
           required:true
       }
   },
   methods:{
       fun(val){
        //    console.log(val);
        //    console.log(this.ziarr);
           var paoarr=this.ziarr.filter((v,i,that)=>{
                if(i == val){
                    return that[i];
                }
            })
            this.$router.push({name:'xqmove',query:{arr:paoarr}});
       }
   },
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
        margin: .1rem 0;
    }
    .ban>p{
        font-size: .16rem;
        color: #111111;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>
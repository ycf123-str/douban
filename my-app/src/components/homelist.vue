<template>
    <div>
        <img class="deng" src="../../static/img/loading_green.c0f9be0.gif" v-if="arrs.length<=0">
        <div v-else>
            <div class="list" v-for="(v,i) in arrs" :key="i" @click="fun(i)">
                <div class="left">
                    <h1>{{arrs[i].title}}</h1>
                    <p v-html="newarr[i]"></p>
                    <span>{{arrs[i].category_name}}</span>
                </div>
                <div class="right">
                    <img :src="arrs[i].image">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        setTimeout(()=>{
                this.axios({
                    method:"get",
                    url:"/homedata"
                }).then((data)=>{
                
                    var arr = data.data.shouye;
                    this.arrs = data.data.shouye;
                    for(var i=0;i<arr.length;i++){
                        this.newarr.push(arr[i].content.substring(0,30));
                    }
                    // console.log(arr);
                })  
        },1000)
        
    },
    data(){
        return{
            newarr:[],
            arrs:[],
            paoarr:[]
        }
    },
    methods:{
        fun(val){
            this.paoarr=this.arrs.filter((v,i,that)=>{
                if(i == val){
                    return that[i];
                }
            })
            this.$router.push({name:'homexq',params:{arr:this.paoarr}});
        }
    },
}
</script>
<style scoped>
.deng{
    margin: 0 1.3rem;
}
    .list{
        margin-left:.2rem;
        padding: .3rem .2rem .3rem 0;
        border-bottom: 1px solid #ccc;
        font-size: 0;
    }
    .left{
        width: 70%;
        display: inline-block;
    }
    .left>h1{
        font-size: .16rem;
        color:#494949;
        margin-bottom: .1rem;
        font-weight: 100;
    }
    .left>p{
         font-size: .12rem;
        color:#aaaaaa;
        margin-bottom: .25rem;
    }
    .left>span{
         font-size: .12rem;
        color:#ccc;
    }
    .right{
        width: 28%;
        display: inline-block;
        vertical-align: top;
    }
    .right>img{
        width: 100%;
    }
</style>
<template>
    <div>
        <div class="head">
        <div class="tit">
            <span>{{title}}</span>
            <a href="#">更多</a>
        </div>
        <div class="con">
            <div v-for="(v,i) in arr" :key="i" class="box" v-if="!v.line">
                <a :href="v.href" :style="{color:v.color}">{{v.title}}</a>
            </div><br v-else/>
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
        }
    },
    created(){
        this.axios({
            method:"get",
            url:"/faxian"
        }).then((data)=>{
            // console.log(data.data.faxianhaodianying);
            this.arr=data.data.faxianhaodianying;
        })
    },
    data(){
        return{
            arr:[]
        }
    }
}
</script>

<style scoped>
.con{
    white-space: nowrap;
    overflow:auto;
    font-size: 0;
}
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
    .box{
        border:1px solid orange;
        height: .7rem;
        line-height: .7rem;
        border-radius: 5px;
        padding: 0 .15rem;
        margin: .1rem .1rem;
        font-size:0;
        display: inline-block;
    }
    .box>a{
        font-size: .18rem;
    }
</style>
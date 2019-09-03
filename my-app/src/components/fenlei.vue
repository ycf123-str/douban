<template>
    <div class="head">
        <p>分类浏览</p>
        <div class="aas" v-for="(v,i) in arr" :key="i">
            <a :href="v.url">{{v.name}}</a>
            <span></span>
        </div>
    </div>
</template>

<script>
export default {
    created(){
        this.axios({
            method:"get",
            url:"/fenlei"
        }).then((data)=>{
            // console.log(data.data);
            this.arr=data.data
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
    .head{
        margin-left: .2rem;
        font-size: 0;
    }
    p{
        font-size: .2rem;
        color: #111111;
        margin-bottom: .2rem;
    }
    .aas{
        width: 50%;
        height: .5rem;
        font-size: 0;
        line-height: .5rem;
        border-right: 1px solid #ccc;
        border-top: 1px solid #ccc;
        padding:0 5%;
        display: inline-block;
        box-sizing: border-box;
    }
    .aas>a{
        font-size: .16rem;
        color: #42bd56;
        float: left;
    }.aas>span{
        color: #ccc;
        font-weight: 700;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        width: .08rem;
        height: .08rem;
        transform: rotate(-45deg);
        margin-top: .2rem;
        float: right;
    }
</style>
<template>
    <div class="head">
        <h3>{{title}}</h3>
        <div class="box" v-for="(v,i) in arr" :key="i">
            <dir class="top">
                <img :src="v.images.small">
                <span class="spantit">{{v.title}}</span>
                <span class="spanren">{{v.group_member}}人</span>
            </dir>
            <p>{{v.group_topic.time}}{{v.group_topic.title}}</p>
        </div>
        <a class="foota" href="#">{{texta}}</a>
    </div>
</template>
<script>
export default {
    props:{
        title:{
            type:String,
            required:true
        },
        arr:{
            type:Array,
            required:true
        },
        texta:{
            type:String,
            required:true
        }
    }
}
</script>
<style scoped>
    .head{
        font-size: .18rem;
        color: #111111;
        margin-left: .18rem;
        margin-top: .18rem;
        padding-top: .14rem;
    }
    .head>h3{
        font-size: .2rem;
        color: #111111;
        font-weight: 100;
    }
    .box{
        padding: .18rem .21rem .18rem 0;
        border-bottom: 1px solid #f2f2f2;
    }
    .top>img{
         vertical-align: middle;
         margin-right: .1rem;
    }
    .spantit{
        font-size: .18rem;
        color: #111111;
        vertical-align: middle;
        width: 2rem;
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .spanren{
        font-size: .15rem;
        color: #ccc;
    }
    .box>p{
        font-size: .15rem;
        color:#aaa;
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: .1rem;
    }
    .foota{
        display: block;
        padding: .18rem 0;
        margin-bottom: .4rem;
        text-align: center;
        font-size: .16rem;
        color: #42bd56;
    }
</style>
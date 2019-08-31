<template>
    <div class="header">
        <router-link to="/shouye">豆瓣</router-link>
        <router-link to="/dianying">电影</router-link>
        <router-link to="/tushu">图书</router-link>
        <router-link to="/guangbo">广播</router-link>
        <router-link to="/xiaozu">小组</router-link>

    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        width: 90%;
        height: .6rem;
        position: fixed;
        top: 0;
        background-color: pink;
        border-bottom: 1px solid #f3f3f3;
        padding: 0 5%;
        font-size: 0;
        display: flex;
    }
    .header>a:nth-child(1){
        font-size: .32rem;
        color: #05b512;
        font-weight: 600;
        line-height: .6rem;
        margin-right: 20%;
    }
    .header>a:nth-child(2){
        font-size: .16rem;
        color: #2384e8;
        line-height: .6rem;
        margin-right: .15rem;
    }
    .header>a:nth-child(3){
        font-size: .16rem;
        color: #9f7860;
        line-height: .6rem;
        margin-right: .15rem;
    }
    .header>a:nth-child(4){
        font-size: .16rem;
        color: #e4a813;
        line-height: .6rem;
        margin-right: .15rem;
    }
    .header>a:nth-child(5){
        font-size: .16rem;
        color: #2ab8cc;
        line-height: .6rem;
        margin-right: .15rem;
    }
</style>
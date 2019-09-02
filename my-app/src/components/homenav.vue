<template>
    <div class="header">
        <router-link to="/dianying">影院热映</router-link>
        <router-link to="/guangbo">欧美新碟榜</router-link>
        <router-link to="/reg">注册账号</router-link>
        <router-link to="/login">登录豆瓣</router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .header{
        width: 86%;
        margin:0.8rem 7% 0;
        font-size: 0;
    }
    .header>a{
        font-size: .2rem;
        width: 50%;
        height: .6rem;
        display: inline-block;
        text-align: center;
        line-height: .5rem;
        color: #494949;
        background-color: #f6f6f6;
        border: 5px solid #fff;
        box-sizing: border-box;
    }
</style>
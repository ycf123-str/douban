<template>
    <div>
        <link-nav></link-nav>
        <div class="geli">
            <xiazaiapp tit="打开App,浏览更多"></xiazaiapp>
            <zi-login></zi-login>
            <zi-guang></zi-guang>
            <a class="cla" href="#">显示更多广播</a>  
            <footers></footers>   
        </div> 
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import xiazaiapp from '../components/xiazaiapp'
import ziLogin from '../components/zilogin'
import ziGuang from '../components/ziguangbo'
import footers from '../components/footer'
export default {
    components:{
        linkNav,
        xiazaiapp,
        ziLogin,
        ziGuang,
        footers
    }
}
</script>

<style scoped>
    .geli{
        margin-top: .6rem;
        font-size: 0;
    }
    .cla{
        color: #42bd56;
        font-size: .16rem;
        padding: .18rem 0;
        display: block;
        text-align: center;
    }
</style>
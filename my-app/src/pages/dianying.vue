<template>
    <div>
        <link-nav></link-nav>
        <div class="geli">
            <move-ban></move-ban>
            <fa-xian title="发现好电影"></fa-xian>
            <fen-lei></fen-lei>
            <footers></footers>
        </div> 
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import moveBan from '../components/moveban'
import faXian from '../components/faxian'
import fenLei from '../components/fenlei'
import footers from '../components/footer'
export default {
    components:{
        linkNav,
        moveBan,
        faXian,
        fenLei,
        footers
    }
}
</script>

<style scoped>
    .geli{
        margin-top: .6rem;
    }
</style>
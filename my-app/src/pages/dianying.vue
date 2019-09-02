<template>
    <div>
        <link-nav></link-nav>
        <div class="geli">
            <move-ban></move-ban>
        </div> 
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import moveBan from '../components/moveban'
export default {
    components:{
        linkNav,
        moveBan
    }
}
</script>

<style scoped>
    .geli{
        margin-top: .6rem;
    }
</style>
<template>
    <div>
        <el-rate id="box"
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}">
        </el-rate>
    </div>
</template>

<script>
export default {
    props:{
        value:{
            type:Number,
            required:true
        }
    },
    // data(){
    //   return {
    //     value: 3.7
    //   }
    // }
}
</script>
<style scoped>
    /* #box span i */
    div .iel-rate__icon{
        margin-right: 0px;
        font-size: 10px;
    }
</style>
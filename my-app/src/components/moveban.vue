<template>
<div>
    <zi-move title="影院热映" :ziarr="arra"></zi-move>
    <zi-move title="免费在线观影" :ziarr="arrb"></zi-move>
    <zi-move title="新片速递" :ziarr="arrc"></zi-move>
</div>
</template>
<script>
import ziMove from './zimoveban'
export default {
    components:{
        ziMove
    },
    created(){
        this.axios({
            method:"get",
            url:"/movie"
        }).then((data)=>{
            // console.log(data.data.movie);
            var arrs = data.data.movie;
            arrs.filter((v,i)=>{
                if(i<11){
                    this.arra.push(arrs[i]);
                }
                return;
            })
            arrs.filter((v,i)=>{
                if(i>10 && i<21){
                    this.arrb.push(arrs[i]);
                }
                return;
            })
            arrs.filter((v,i)=>{
                if(i>20 && i<31){
                    this.arrc.push(arrs[i]);
                }
                return;
            })
        })   
    },
    data(){
        return{
            arra:[],
            arrb:[],
            arrc:[]
        }
    }
}
</script>
<style scoped>
    /* .head{
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
    .ban{
        width: 35%;
        margin-right: .1rem;
        font-size: 0;
        flex-shrink: 0;
    }
    .ban>img{
        width: 100%;
        height: 1.8rem;
    }
    .ban>p{
        font-size: .16rem;
        color: #111111;
        text-align: center;
    } */
</style>
<template>
    <div>
        <link-nav></link-nav>
        <div class="geli">
            <zi-ban title="最受关注图书 | 虚构类" :ziarr="arra"></zi-ban>
            <zi-ban title="最受关注图书 | 非虚构类" :ziarr="arrb"></zi-ban>
            <zhi-shu :ziarr="arrc"></zhi-shu>
            <fa-xian title="发现好书"></fa-xian>
            <fen-lei></fen-lei>
            <footers></footers>
        </div> 
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import ziBan from '../components/zimoveban.vue'
import zhiShu from '../components/zhishu.vue'
import faXian from '../components/faxian'
import fenLei from '../components/fenlei'
import footers from '../components/footer'
export default {
    components:{
        linkNav,
        ziBan,
        zhiShu,
        faXian,
        fenLei,
        footers
    },
    created(){
        this.axios({
            url:"/books",
            method:"get"
        }).then((data)=>{
            // console.log(data.data.book);
            this.arr = data.data.book;
             this.arr.filter((v,i)=>{
                if(i<11){
                    this.arra.push(this.arr[i]);
                }
                return;
            })
            this.arr.filter((v,i)=>{
                if(i>10 && i<21){
                    this.arrb.push(this.arr[i]);
                }
                return;
            })
            this.arr.filter((v,i)=>{
                if(i>20 && i<31){
                    this.arrc.push(this.arr[i]);
                }
                return;
            })
        })
    },
    data(){
        return{
            arr:[],
            arra:[],
            arrb:[],
            arrc:[]
        }
    }
}
</script>

<style scoped>
    .geli{
        margin-top: .7rem;
    }
</style>
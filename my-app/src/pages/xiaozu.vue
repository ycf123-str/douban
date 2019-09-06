<template>
    <div>
        <link-nav></link-nav>
        <div class="geli">
            <zi-login></zi-login>
            <xiaozucom texta="更多相关小组" title="租房找舍友" :arr="arra"></xiaozucom>
            <xiaozucom texta="来聊五毛钱" title="来聊五毛钱" :arr="arrb"></xiaozucom>
            <xiaozucom texta="买买买" title="更多相关小组" :arr="arrc"></xiaozucom>
            <footers></footers> 
        </div> 
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import ziLogin from '../components/zilogin'
import xiaozucom from '../components/xiaozucom'
import footers from '../components/footer'
export default {
    components:{
        linkNav,
        ziLogin,
        xiaozucom,
        footers
    },
    created(){
        this.axios({
            method:"get",
            url:"/xiaozua"
        }).then((data)=>{
            // console.log(data);
            this.arra= data.data.xiaozua;
            this.arrb= data.data.xiaozub;
            this.arrc= data.data.xiaozuc;
            // console.log(this.arra)
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
    .geli{
        margin-top: .6rem;
    }
</style>
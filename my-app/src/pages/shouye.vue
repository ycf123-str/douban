<template>
    <div style="font-size:0">
        <link-nav></link-nav>
            <p>{{texta}}</p>
            <home-nav :bool="text"></home-nav>
            <home-list></home-list>
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import homeNav from '../components/homenav'
import homeList from '../components/homelist'
export default {
    components:{
        linkNav,
        homeNav,
        homeList
    },
    data(){
        return{
            text:"",
            texta:""
        }
    },
    created(){
        var localtoken=window.localStorage.getItem("token");
        if(localtoken){
            this.axios({
                method:"get",
                url:"http://localhost:3000/shouye",
                params:{
                    token:localtoken
                }
            }).then((ok)=>{
                // console.log(ok.data.username);
                if(ok.data.linkid==5){
                    this.text="欢迎您"+ok.data.username;
                    this.$message({
                        message: `欢迎您${ok.data.username}`,
                        type: 'success'
                    });
                }
            })
        }else{
            var i = 4;
            var mytimer = setInterval(()=>{
                i--;
                if(i == 0){
                    clearInterval(mytimer);
                    this.$router.push("/login");
                }
                this.texta = "不好意思当前页面仅对会员开放请您登录后访问"+i+"秒后跳转";
            },1000)
        }
    }
}
</script>

<style scoped>
    p{
        width: 100%;
        position: absolute;
        top:.6rem;
        font-size: .2rem;
        text-align: center;
        color:deeppink;
    }
</style>
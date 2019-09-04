<template>
    <div>
        <link-nav></link-nav>
            <p>{{text}}</p>
            <home-nav></home-nav>
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
            text:""
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
                        this.text = "不好意思当前页面仅对会员开放请您登录后访问"+i+"秒后跳转";
            },1000)
        }
    }
}
</script>

<style scoped>
    p{
        margin-top: .6rem;
        font-size: .2rem;
    }
</style>
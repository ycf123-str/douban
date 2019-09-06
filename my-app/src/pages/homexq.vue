<template>
    <div>
        <link-nav></link-nav>
        <xiazaiapp tit="每日看点好内容"></xiazaiapp>
        <div class="info">
            <h2>{{arr[0].title}}
                <span>{{arr[0].loc_name}}</span>
            </h2>
            <div class="imgbox">
                <img :src="arr[0].image">
            </div>
            <div class="divb">
                <span >时间：&nbsp;&nbsp;</span>
                <ul class="ula">
                <li>{{arr[0].begin_time}}</li> 
                <li>{{arr[0].end_time}}</li>
                </ul>        
            </div> 
            <div class="divb">
                <span >地点：&nbsp;&nbsp;</span>
                <ul class="ula">
                <li>{{arr[0].address}}</li>
                </ul>    
            </div>  
            <div class="divb">
                <span >费用:  &nbsp;&nbsp;</span>
                <ul class="ula">
                <li>{{arr[0].fee_str}}</li>
                </ul>    
            </div>  
            <div class="divb">
                <span >类型:  &nbsp;&nbsp;</span>
                <ul class="ula">
                <li>{{arr[0].category}}</li>
                </ul>    
            </div>  
            <div class="divb">
                <span >起始时间: &nbsp;&nbsp;</span>
                <ul class="ula">
                <li>侨福当代美术馆</li>
                </ul>    
            </div> 
            <div class="divc">
            <a href="#">艺术展</a>
            <a href="#">国际</a>
            <a href="#">艺术</a>
            <a href="#">当代</a>
            <a href="#">策展</a>
            </div> 
            <h4>活动详情</h4>
            <div class="divd" v-html="arr[0].content"></div> 
        </div>
        <footers></footers> 
    </div>
</template>
<script>
import linkNav from '../components/linknav'
import xiazaiapp from '../components/xiazaiapp'
import footers from '../components/footer'
export default {
    components:{
        linkNav,
        xiazaiapp,
        footers
    },
    created(){
        this.arr=this.$route.params.arr;
        // console.log(this.arrs)
    },
    data(){
        return{
            arr:[]
        }
    }
}
</script>
<style scoped>
    .info{
        margin: .2rem;
    }
    .info>h2{
        font-size: .18rem;
        color:#494949;
    }
    .info>h2>span{
        display: block;
        font-size: .12rem;
        color:#fff;
        width: .36rem;
        height: .26rem;
        text-align:center;
        line-height: .26rem;
        background: #ff8263;
    }
    .imgbox{
        text-align: center;
        margin: .3rem 0;
    }
    .imgbox>img{
        width: 2.6rem;
        height: 3.6rem;
    }
    .divb{
    margin-top: 0.1rem;
    width: 3rem;
    display: flex;
}
.divb>span{
    font-size: 0.16rem;
    color:#666666;
    width: 0.55rem;
}
.ula{
    font-size: 0.16rem;   
}
.divc{
    font-size: 0;
}
.divc>a{
  display:inline-block;
  width: auto;
  font-size:0.18rem;
  color:#494949;
  background:#F5F5F5;
  border-radius: 0.3rem;
  border:0.06rem solid #F5F5F5;
  margin-right:0.3rem;
  margin-top: 0.1rem;

}
h4{
  font-size: 0.2rem;
  color:#072;
}
.divd{
    margin-top: 0.05rem;
   font-size: 0.16rem;
}
</style>
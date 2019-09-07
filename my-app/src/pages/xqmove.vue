<template>
    <div>
         <link-nav></link-nav>
        <xiazaiapp tit="聊聊你的观影感受"></xiazaiapp>
        <div class="move">
            <h3>{{arr[0].title}}</h3>
            <wuxing :value="arr[0].rating.average/2"></wuxing>
            <span class="pinglun">{{arr[0].id}}人评论</span>
            <p class="yybiao">
                2018 / {{arr[0].genres[0]}} / {{arr[0].genres[1]}}<br>
                演员 / {{arr[0].casts[0].name}} / {{arr[0].casts[1].name}} / {{arr[0].casts[2].name}}<br><br>
                <a href="#">查看影人资料</a>
            </p>
            <img :src="arr[0].images.large" class="zzimg">
        </div>
        <div class="look">
            <a href="#">想看</a>
            <a href="#">看过</a>
        </div>
        <div class="jianjie">
            <p>{{arr[0].title}}的简介</p>
            <div> 20世纪40年代末，小有成就的青年银行家安迪（蒂姆·罗宾斯 Tim Robbins 饰）因涉嫌杀害妻子及她的情人而锒铛入狱。在这座名为肖申克的监狱内，希望似乎虚无缥缈，终身监禁的惩罚无疑注定了安迪接下来灰暗绝望的人生……<br>本片根据著名作家斯蒂芬·金（Stephen Edwin King）的原著改编。</div>
            <p>查看更多相关分类</p>
            <span>{{arr[0].genres[0]}}</span>
            <span>{{arr[0].genres[1]}}</span>
            <p>{{arr[0].title}}的图片</p>
            <div class="imgbox">
                <img :src="arr[0].images.large">
                <img :src="arr[0].images.large">
                <img :src="arr[0].images.large">
            </div>
            <p>{{arr[0].title}}的短评</p>
        </div>
    </div>
</template>

<script>
import linkNav from '../components/linknav'
import xiazaiapp from '../components/xiazaiapp'
import wuxing from '../components/fiveStarts'
export default {
    components:{
        linkNav,
        xiazaiapp,
        wuxing
    },
    created(){
        // console.log(this.$route.query.arr);
        this.arr=this.$route.query.arr;
    },
    data(){
        return{
            arr:[],
            ok:true
        }
    }
}
</script>

<style scoped>
.move{
    margin: .1rem;
    font-size: 0;
}
.move>h3{
    font-size: .2rem;
}
.pinglun{
    font-size: .16rem;
    color:#ccc;
    position: absolute;
    left: 45%;top:1.74rem;
}.yybiao{
    margin-top: .2rem;
    font-size: .16rem;
    color:#111;
    width: 60%;
}
.zzimg{
    position: absolute;
    width: 35%;
    right: .1rem;
    top:2rem;
}
.yybiao a{
    font-size: .18rem;
    color:limegreen;
}
.look{
    margin:1rem .1rem 0;
    font-size: 0;
}
.look>a{
    display: inline-block;
    width: 45%;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
    font-size: .18rem;
    color:yellowgreen;
    border: 1px solid yellowgreen;
    margin-right: 4%;
}
.jianjie{
    margin:.2rem .1rem 0;
    font-size: 0;
}
.jianjie>p{
     font-size: .16rem;
     color: #ccc;
}
.jianjie>div{
    margin: .2rem 0;
     font-size: .16rem;
     color: rgb(32, 31, 31);
}
.jianjie>span{
    margin: .2rem 5px;
    font-size: .16rem;
    color: rgb(32, 31, 31);
    display: inline-block;
    background: #ccc;
    width: .6rem;
    height: .4rem;
    text-align: center;
    line-height: .4rem;
    border-radius: .1rem;
}
.imgbox{
    display: flex;
    overflow: auto;
    height: 1.5rem;
}
    p{
        font-size: .16rem;
    }
</style>
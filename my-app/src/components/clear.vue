<template>
  <div class="cleara">      
      <h2>{{arr[0].title}}</h2>
      <span  class="spa">{{arr[0].loc_name}}</span>
      <img :src="arr[0].image" alt="">
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
</template>
<script>
export default {
  props:{
    arr:{
      type:Array,
      required:true
    }
  }
  
} 
</script> 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cleara{
    font-size: 0rem;
    margin: 1.5rem 0 0 0.1rem;
    width: 3.5rem;

}
h2{
    font-size:0.15rem;
    color:#494949;
}
.spa{
    font-size:0.12rem;
    display: inline-block;
    width: 0.4rem;
    text-align: center;
    background:#ff8263;
    color:white;
    font-weight: 700;
    border-radius: 0.03%;
}
img{
    display: block;
    width:2rem ;
    margin:0.3rem 0.5rem;
}
.divb{
    margin-top: 0.1rem;
    width: 3rem;
    display: flex;
}
.divb>span{
    font-size: 0.12rem;
    color:#666666;
    width: 0.55rem;
}
.ula{
    font-size: 0.12rem;   
}
.divc>a{
  display:inline-block;
  width: auto;
  font-size:0.15rem;
  color:#494949;
  background:#F5F5F5;
  border-radius: 0.3rem;
  border:0.06rem solid #F5F5F5;
  margin-right:0.3rem;
  margin-top: 0.1rem;

}
h4{
  font-size: 0.15rem;
  color:#072;
}
.divd{
    margin-top: 0.05rem;
   font-size: 0.12rem;
}
</style>

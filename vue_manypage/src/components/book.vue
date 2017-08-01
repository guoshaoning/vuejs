<template>
  <div class="book">
    <div id="bookcont">
      <div id="bleft"><img src="../assets/book.png"/></div>
      <div id="bright">
        <p>编号：{{id}}</p>
        <h3>小狗钱钱</h3>
        <p>作者：(德)博多·舍费尔</p>
        <p>价格：¥29.9</p>
        <p>出版社：云南出版集团公司 晨光出版社</p>
        <p>出版时间：2017年８月</p>
        <p>内容导读：吉娅是一个普通的12岁女孩，一次偶然的机会，她救助了一只受伤的小狗，并给它取名叫“钱钱”。<span id="show">没想到，钱钱居然是一位深藏不露的理财高手，它彻底改变了吉娅一家人的财富命运……</span><span id="key" v-on:click="showcont">显示</span></p>
        <p>数量：<img src="../assets/jian.png" v-on:click="count -= 1"/><span id="count">{{count}}</span><img src="../assets/jia.png" v-on:click="count += 1"/></p>
        <div><button>加入购物车</button></div>
      </div>
    </div>
    <p></p>
    <div id="ping">
      <h3>评论区</h3>
      <img src="../assets/pline.png"/>
      <textarea cols="70" rows="10" v-model="onecomment">{{onecomment}}</textarea>
      <button>发表</button>
      <div class="comment">
        <div class="comleft"><img src="../assets/tou1.png"/></div>
        <div class="comright">
          <p><span class="name">凝子</span><span class="time">2017年7月24日 20:20:20</span></p>
          <p>{{onecomment}}</p>
          <p><img src="../assets/zan.png" style="width: 25px;height: 25px"/></p>
        </div>
      </div>
      <div class="comment" v-for="tou in tous">
        <div class="comleft"><img :src="tou.url"/></div>
        <div class="comright">
          <p><span class="name">{{tou.name}}</span><span class="time">{{tou.ttime}}</span></p>
          <p>{{tou.comment}}</p>
          <p><img src="../assets/zan.png" style="width: 25px;height: 25px"/></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tou2 from '../assets/tou2.png'
  import tou3 from '../assets/tou3.png'
  import tou4 from '../assets/tou4.png'
  import tou5 from '../assets/tou5.png'
  import tou6 from '../assets/tou6.png'

export default {
  name: 'book',
  data () {
    return {
      id:this.$route.params.id,
      count:1,
      onecomment:'我想说...',
      tous:[
        {
          'name':'小叶子',
          'ttime':'2017年7月24日 20:20:20',
          'comment':'这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错...',
          'url':tou2
        },
        {
          'name':'我最美',
          'ttime':'2017年7月24日 20:20:20',
          'comment':'这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错...',
          'url':tou3
        },
        {
          'name':'放飞的蒲公英',
          'ttime':'2017年7月24日 20:20:20',
          'comment':'这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错...',
          'url':tou4
        },
        {
          'name':'丢失的小孩',
          'ttime':'2017年7月24日 20:20:20',
          'comment':'这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错...',
          'url':tou5
        },
        {
          'name':'蔡美女',
          'ttime':'2017年7月24日 20:20:20',
          'comment':'这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错这本书很不错...',
          'url':tou6
        },
      ]
    }
  },
  methods:{
    showcont:function () {
      var show = document.getElementById('show');
      var key = document.getElementById('key').innerText;
      if('显示' == key){
        show.style.display="block";
        document.getElementById('key').innerText='隐藏';
      }
      if('隐藏' == key){
        show.style.display="none";
        document.getElementById('key').innerText='显示';
      }
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
ul li{
  list-style-type: none;
}
/**/
#bookcont{
  margin:0 20%;
}
#bleft{
  float: left;
}
  #bright{
    float: left;
   margin: 40px 0 0 20px;
    width:50% ;
  }
  #bright h3{
    margin-bottom: 10px;
  }
#bright p {
  margin-bottom: 10px;
}
#key{
  cursor:pointer;
  color: cornflowerblue;
}
#show{
  display: none;
}
  #count{
    display: inline-block;
    margin:0 10px 0 10px;
    font-size: 20px;
  }
  #bright img{
    cursor:pointer;
  }
  #bright button{
    height: 30px;
    width: 80px;
    background-color: coral;
    border: 1px solid coral;
    border-radius: 5px;
    cursor:pointer;
  }
  /*评论*/
  #ping{
    margin: 0 10%;
    clear: both;
    padding-top: 50px;
    margin-bottom: 50px;
  }
  #ping img{
    width: 100%;
  }
  #ping textarea{
    margin-top: 20px;
  }
  #ping button{
    width:60px;
    height: 30px;
    background-color: dodgerblue;
    border: 1px solid dodgerblue;
  }
  .comment{
    width:700px;
    height: 150px;
    margin-top: 30px;
    border: 1px solid gainsboro;
  }
  .comleft{
    float: left;
  }
  .comright{
    float: left;
    margin-left: 10px;
  }
  .comright p {
    width: 500px;
    margin-top: 15px;
  }
  .name{
    font-size: 20px;
    font-weight: bold;
  }
  .time{
    font-size: 16px;
    color: darkgray;
    margin-left: 40%;
  }
</style>

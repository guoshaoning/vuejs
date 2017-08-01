<template>
  <div id="app">
    <div id="top">
      <div id="topone"><img src="./images/logo.jpg"/></div>
      <div id="toptwo">
        <input type="text" placeholder=""><button type="submit">搜索</button>
        <span><a href="#">登录</a></span>|<span><a href="#">注册</a></span>
      </div>
      <div id="topthree">
        <a href="#"><img src="./images/buycar.png"></a>
      </div>
    </div>

    <div id="content">
      <ul id="listtitle">
        <li id="ulone">商品信息</li>
        <li id="ultwo">商品金额</li>
        <li id="ulthree">信息数量</li>
        <li id="ulfour">总金额</li>
        <li id="ulfive">编辑</li>
      </ul>
      <div class="buyBook" v-for="buybook in buybooks">
        <div class="checkbook"><div v-bind:class="{'checked':buybook.checked}" v-on:click="selectBook(buybook)"></div></div>
        <div class="books">
          <img :src="buybook.url" style="width: 100px;height: 120px"/>
          <div class="con">
            <h4>{{buybook.name}}</h4>
            <p>{{buybook.author}}</p>
            <p>{{buybook.content}}</p>
          </div>
        </div>
        <div class="num"><img src="./images/jian.png" v-on:click="bookNum(buybook,-1)"/><span v-model="buybook.quentity">{{buybook.quentity}}</span><img src="./images/jia.png" v-on:click="bookNum(buybook,1)"/></div>
        <div class="price">¥{{buybook.price * buybook.quentity | round}}</div>
        <div class="del"><a href="#" v-on:click="overlay(buybook)">删除</a></div>
      </div>
      <div id="pay">
        <div id="allcheck"><div v-bind:class="{'checked':checkall}" v-on:click="checkAllb"></div>全选</div>
        <div id="total" v-model="totalmoney">总计：¥{{totalmoney | round}}</div>
        <div id="paymoney"><button>确认付款</button></div>
      </div>
    </div>

    <div id="footer">
      <ul>
        <li><a href="#">网站联盟</a></li>
        <li><a href="#">机构销售</a></li>
        <li><a href="#">Powered by Atlassian Confluence 5.10.0</a></li>
      </ul>
    </div>

    <div id="overlay" v-show="ok">
      <div id="modal">
        <h3 id="isdel">确定要删除吗</h3>
        <button v-on:click="del" id="del">删除</button>
        <button v-on:click="overlay" id="nodel">取消</button>
      </div>
    </div>

  </div>
</template>

<script>
  import book1 from './images/book1.png'
  import book2 from './images/book2.png'
  import book3 from './images/book3.png'
  import book4 from './images/book4.png'
  export default {
    name: 'app',
    data () {
      return {
        checkall:false,
        totalmoney:0,
        ok:false,
        curProduct:'',
        buybooks:[{
          'name':'小狗钱钱',
          'author':'(德)博多·舍费尔',
          'price':29.9,
          'quentity':1,
          'content':'少儿图书',
          'url':book1,
        },
          {
            'name':'三国演义',
            'author':'（明）罗贯中',
            'price':33.3,
            'quentity':1,
            'content':'少儿图书',
            'url':book2
          },
          {
            'name':'查理和巧克力工厂',
            'author':'罗尔德·达尔',
            'price':19.9,
            'quentity':1,
            'content':'少儿图书',
            'url':book3
          },
          {
            'name':'给孩子读诗',
            'author':'果麦',
            'price':69.9,
            'quentity':1,
            'content':'少儿图书',
            'url':book4
          },
        ]
      }
    },
    filters:{
      round:function (value) {
        var money = value.toFixed(1);
        return money;
      }
    },
    methods:{
      bookNum:function (event,sign) {
        if(sign<0){
          event.quentity--;
          if(event.quentity<1){
            event.quentity = 1;
          }
        }else{
          event.quentity++;
        }
        this.totalPrice();
      },
      selectBook:function (event) {
        if(!event.checked){
          //Vue.set(event,"checked",true);
          this.$set(event,"checked",true);
        }else {
          event.checked = !event.checked;
        }
        this.totalPrice();
      },
      checkAllb:function () {
        this.checkall = !this.checkall;
        var _this = this;
        this.buybooks.forEach(function (event,index) {
          if(!event.checked){
            _this.$set(event,"checked",_this.checkall);
          }else {
            event.checked = _this.checkall;
          }
        });
        this.totalPrice();
      },
      totalPrice:function () {
        this.totalmoney = 0;
        var _this = this;
        this.buybooks.forEach(function (event,index) {
          if(event.checked){
            _this.totalmoney += event.price *event.quentity;
          }
        })
      },
      overlay:function (event) {
        this.ok = !this.ok;
        this.curProduct = event;
      },
      del:function () {
        var index = this.buybooks.indexOf(this.curProduct);
        this.buybooks.splice(index,1);
        this.ok = !this.ok;
      }
    }

  }
</script>

<style>
  * {
    padding: 0;
    margin: 0
  }
  ul li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
    color: #333333;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  .checked{
    background-color: coral;
    border: 1px solid red;
  }
  /*top*/
  #top{
    width:100%;
    height: 70px;
    background-color:#f6f6f6;
  }
  #topone{
    width:65%;
    float: left;
  }
  #topone img{
    margin:5px 0 0 50px;
  }
  #toptwo{
    width:25%;
    float: left;
    margin: 20px 0 0 0;
  }
  #toptwo input{
    width:120px;
  }
  #toptwo button{
    margin-right:30px;
  }
  #toptwo span{
    font-size:18px;
  }
  #topthree{
    width:10%;
    float: left;
    margin-top:10px ;
  }
/*bookcontent*/
  #content{
    margin:0 10%;
  }
  /*表头*/
  #listtitle{
    height: 20px;
    margin-top: 20px;
  }
  #listtitle li{
    float: left;
    font-size: 20px;
    color: coral;
    font-weight: bold;
  }
  #ulone{
    width: 25%;
    margin-left: 20px;
    padding-left: 80px;
  }
  #ultwo{
    width: 15%;
  }
  #ulthree{
    width: 20%;
  }
  #ulfour{
    width: 20%;
  }
  .buyBook{
    height: 140px;
    border: 1px solid gainsboro;
    margin-top: 20px;
  }
  .checkbook{
    float: left;
    width:2%;
    margin-top: 20px;
    margin-left: 10px;
  }
  .checkbook div{
    width: 10px;
    height: 10px;
    cursor: pointer;
    border: 1px solid coral;
  }
  .books{
    float: left;
    width:30%;
    margin: 10px;
  }
  .books img{
    float: left;
  }
  .books .con{
    float: left;
    margin-left: 10px;
    margin-top: 5px;
  }
  .con p{
    margin-top: 5px;
    color: darkgrey;
  }
  .num{
    float: left;
    width:30%;
    margin-top: 20px;
  }
  .num img{
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .num span{
    margin: 0 10px;
  }
  .price{
    float: left;
    width:25%;
    margin-top: 20px;
  }
  .del{
    float: left;
    margin-top: 20px;
  }
  .del a{
    color: royalblue;
  }
  /*全选付款*/
  #pay{
    margin-top: 30px;
    padding-bottom: 100px;
  }
  #allcheck{
    float: left;
    width:75%;
    margin-left: 20px;
    font-size: 18px;
  }
  #allcheck div{
    width: 10px;
    height: 10px;
    cursor: pointer;
    border: 1px solid coral;
    float: left;
    margin-top: 5px;
    margin-right: 5px;
  }
  #total{
    float: left;
    width: 15%;
    font-size: 18px;
    padding-top: 10px;
  }
  #paymoney{
    float: left;
  }
  #paymoney button{
    width: 80px;
    height:40px;
    background-color: coral;
    border: 1px solid coral;
  }
  /*footer*/
  #footer{
    clear: both;
    width:100%;
    height:100px;
    background: #f6f6f6;
  }
  #footer ul{
    text-align: center;
    padding-top: 20px;
  }
  /*模态框*/
  #overlay{
    visibility: visible;
    position: absolute; /* 使用绝对定位或固定定位 */
    left: 0px;
    top: 0px;
    width:100%;
    height:100%;
    text-align:center;
    z-index: 1000;
    background-color: #333333;
    opacity: 0.9; /* 背景半透明 */
  }
  #modal{
    width:300px;
    margin: 100px auto;
    height: 200px;
    background-color: #FFFFFF;
    opacity: 1;
    border:1px solid #000;
  }
  #isdel{
    margin-top: 50px;
  }
  #del{
    width: 60px;
    height:30px;
    background-color: royalblue;
    border: 1px solid royalblue;
    margin-top: 50px;
    margin-right: 40px;
  }
  #nodel{
    width: 60px;
    height:30px;
    background-color: #CDC9C9;
    border: 1px solid #CDC9C9;
    margin-top: 5 0px;
  }
</style>

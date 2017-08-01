<template>
  <div class="buycar">
    <div id="content">
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
        <div class="num"><img src="../assets/jian.png" v-on:click="bookNum(buybook,-1)"/><span v-model="buybook.quentity">{{buybook.quentity}}</span><img src="../assets/jia.png" v-on:click="bookNum(buybook,1)"/></div>
        <div class="price">¥{{buybook.price * buybook.quentity | round}}</div>
        <div class="del"><a href="#">删除</a></div>
      </div>
      <div id="pay">
        <div id="allcheck"><div v-bind:class="{'checked':checkall}" v-on:click="checkAllb"></div>全选</div>
        <div id="total" v-model="totalmoney">总计：¥{{totalmoney | round}}</div>
        <div id="paymoney"><button>确认付款</button></div>
      </div>
    </div>
  </div>
</template>

<script>
  import book1 from '../assets/book1.png'
  import book2 from '../assets/book2.png'
  import book3 from '../assets/book3.png'
  import book4 from '../assets/book4.png'
export default {
  name: 'buycar',
  data () {
    return {
     checkall:false,
      totalmoney:0,
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
       })
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
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li{
  list-style-type: none;
}
.checked{
  background-color: coral;
  border: 1px solid red;
}
/**/
#content{
  margin:0 10%;
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
</style>

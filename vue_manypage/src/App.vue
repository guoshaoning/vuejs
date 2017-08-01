<template>
  <div id="app">
    <div id="top">
      <div id="topone"><img src="./assets/logo.jpg"/></div>
      <div id="toptwo">
        <input type="text" placeholder=""><button type="submit">搜索</button>
        <span><a href="#">登录</a></span>|<span><a href="#">注册</a></span>
      </div>
      <div id="topthree">
        <router-link to="/buy"><img src="./assets/buycar.png"></router-link>
      </div>
    </div>
    <div id="banner">
      <img src="./assets/banner.jpg"/>
    </div>
    <router-view></router-view>
    <div id="footer">
      <ul>
        <li><a href="#">网站联盟</a></li>
        <li><a href="#">机构销售</a></li>
        <li><a href="#">Powered by Atlassian Confluence 5.10.0</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
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
/*banner*/
#banner img{
  width:100%;
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
</style>

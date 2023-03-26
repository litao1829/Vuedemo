
<template>
    <div class="con">
        <header>
        <RouterLink class="logo" to="home"></RouterLink>
       <div class="head-left">
        <div class="item"> <RouterLink to="/home"><span class="iconfont icon-zhinanzhen"></span>&nbsp;首页</RouterLink></div>
        <div class="item2"> <RouterLink to="/download"><span class="iconfont icon-shoujixiazai"></span>&nbsp;下载APP</RouterLink></div>
        <div class="item2"> <RouterLink to="/member"><span class="iconfont icon-wangguan"></span>&nbsp;会员</RouterLink></div>
        <div class="item2"> <RouterLink to="/technology"><span class="iconfont icon-daima"></span>&nbsp;IT技术</RouterLink></div>
       </div>

       <div class="search-kuang">
        <input type="text" placeholder="搜索">
        <span><img src="../assets/images/sousuo.png" alt=""></span>
       </div>

       <span class="hong"><img src="../assets/images/hongbao.png"></span>

       <span class="Aa">Aa</span>
        <div><RouterLink class="login" to="/sign_in">登录</RouterLink></div>
        <div><RouterLink class="sginup" to="/sign_up">注册</RouterLink></div>
        <div><RouterLink class="write" to="/sign_up"><img src="../assets/images/yumaobi.png"> 写文章</RouterLink></div>
    </header>

    <main>
    <RouterView/>
    </main>
    </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style  scoped>
@import url("../assets/font/iconfont.css");
.con{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
}
header{
    position: fixed;
    top: 0;
    z-index:999;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 50px;
    border-bottom: 1px solid #d5d4d4;
    background-color: white;
}
header a{
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 17px;
    width: 100px;
    height: 41px;
    font-weight: 200;
    color: black;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}
 header a.router-link-active{
    color: #ea6f5a; 
 }
.logo{
    margin-left: 20px;
    display: inline-block;
    background-image: url("../assets/images/jianshu.png");
    width: 100px;
    height: 56px;
    background-size: 48px 26px;
    background-repeat: no-repeat;
    background-position: center;
}
.head-left{
    margin-left: 120px;
    display: flex;
    flex-direction: row;
}
.item{
    width: 110px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.item span{
    font-size:20px;
}
.item2 {
    width: 110px;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.item2 a{
    width: 110px;
    font-weight: 500;
    font-size: 16px;
}
.item2 a span{
    font-size: 18px;
}
.search-kuang{
    margin-left: 25px;
    border-radius: 20px;
    width: 280px;
    height: 38px;
    background-color: #EEEEEE;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 30px;
}
.search-kuang input{
    border:transparent;
    outline:none;
    background-color: #EEEEEE;
    height: 25px;
    width: 190px;
}
.search-kuang span{
    background-color: gray;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: relative;
    left:45px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.search-kuang span img{
    width: 18px;
    height: 18px;
}

.hong{
    margin-left: 30px;
}
.hong img{
    width: 36px;
    height: 36px;
}
.Aa{
    margin-left: 50px;
    font-size: 22px;
    font-weight: 500;
    color: #969696;
}
.login{
    font-size: 16px;
    font-weight: 500;
    color: #969696;
}
.sginup{
    border: 1px solid #ea6f5a;
    border-radius: 25px;
    width: 80px;
    height: 36px;
    font-size: 14px;
    color: #ea6f5a;
}
.write{
    margin-left: 25PX;
   background-color:#ea6f5a;
    border-radius: 25px;
    width: 100px;
    height: 40px;
    font-size: 14px;
    color: white;
}
.write img{
    width: 24px;
    height: 24px;
}
main{
    width: 100%;
    margin-top: 50px;
}
</style>
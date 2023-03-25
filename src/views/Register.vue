<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
   <div class="con">

    <div class="tent">
            <RouterLink to="/" class="index" ></RouterLink>

            <div class="container2">
                <div class="con2-it">
                    <img src="../assets/images/bg1.png" class="bg">
                    <div class="con-left-btn">下载简书APP</div>
                </div>
                <div class="con2-right">
                    <div class="right-first">
                        <RouterLink to="/sign_in">登录</RouterLink>
                        <span>·</span>
                        <RouterLink to="/sign_up">注册</RouterLink>
                    </div>

                    <div class="right-second">
                        <div class="second-inout" style="border-bottom: 1px solid #bfbebe;"><img src="../assets/images/people.png" alt=""><input type="text" placeholder="你的昵称"></div>
                        <div class="second-inout" style="border-bottom: 1px solid #bfbebe;"><img src="../assets/images/shouji.png" alt=""><input type="text" placeholder="手机号"></div>
                        <div class="second-inout"><img src="../assets/images/suo.png" alt=""><input type="password" placeholder="密码"></div>
                    </div>


                    <div class="up">注册</div>

                    <div class="shuo1">点击 “注册” 即表示您同意并愿意遵守简书</div>
                    <div class="shuo2"> 用户协议 <span>和</span> 隐私政策 。</div>

                    <div class="right-forth">
                        <div class="line"></div>
                        <div class="forth-info">社交账号直接注册</div>
                        <div class="line"></div>
                    </div>

                    <div class="right-fif">
                        <img src="../assets/images/weibo.png" class="mr-2"/>
                        <img src="../assets/images/qq.png" class="mr-2"/>
                        <img src="../assets/images/weixin.png" />
                    </div>
                </div>
            </div>
    </div>
   </div>
</template>



<style scoped>
.con{
    width: 100%;
    height: 100%;
    background-color: #f1f1f1;
    position: absolute;
    top: 0px;
    left: 0px;
}

.tent{
    margin-top: 60px;
    margin-left: 50px;
    display: flex;
    flex-direction: row;
    width: 90%;
    height: 80%;
}
.index{
    display: inline-block;
    width: 100px;
    height: 47px;
    background-image: url('../assets/images/jianshu.png');
    background-size: 100px,47px;
    background-position: center;
    background-repeat: no-repeat;
}
.bg{
    width:340px;
    height: 430px;
    margin-top: 20px;
}

.container2{
    display: flex;
    flex-direction: row;
    width: 820px;
    height: 600px;
    margin: 0 auto;
}
.con2-it{
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
}
.con2-right{
    margin-top: 20px;
    width: 400px;
    height: 600px;
    background-color: white;
    margin-left: 40px;
}
.con-left-btn{
    width: 252px;
    height: 46px;
    color: white;
    line-height: 46px;
    font-size: 18px;
    font-weight: 500;
    background-color: #ea6f5a;
    text-align: center;
    margin-top: 20px;
    border-radius: 25px;
}
.con2-right{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.right-first a{
    display: inline-block;
    width: 56px;
    height: 41px;
    color: grey;
    text-decoration: none;
    text-align: center;
    font-size: 22px;
    line-height: 41px;
}
.right-first  a.router-link-active {
    font-size: 22px;
    text-decoration: none;
    font-weight: 700;
     color: #ea6f5a; 
    border-bottom: 2px solid #ea6f5a;
     }
     .right-first span{
        margin-left: 10px;
        margin-right: 10px;
     }
     .right-second{
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        border: 1px solid #bfbebe;
        border-radius: 5px;
     }
     .right-second img{
        width: 20px;
        height: 20px;
     }
     .second-inout{
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 300px;
        height: 50px;
        background-color: #f1f1f1;
        padding-left: 10px;
       
     }
     .second-inout input{
        margin-left: 5px;
        border:transparent;
        outline:none;
        background-color: #f1f1f1;
     }
     .right-third{
        margin-top: 10px;
        width: 300px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: gray;
     }
     .up{
        margin-top: 20px;
        width: 300px;
        height: 40px;
        text-align: center;
       line-height: 40px;
        color: white;
        background-color: #42c02e;
        font-size: 22px;
        font-weight: 500;
        border-radius: 25px;
     }
     .right-forth{
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 10px;
        margin-top: 20px;
     }
     .line{
        box-sizing: border-box;
            margin:0;
            margin-right: 20px;
            margin-left: 20px;
            min-width: 0;
            border-top: 1px solid;
            border-color: #bfbebe;
            width: 60px;
     }
     .forth-info{
        font-size: 12px;
        color: #bfbebe;
     }
     .right-fif{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 40px;
     }
     .right-fif img{
        width: 35px;
        height: 35px;
     }
     .mr-2{
        margin-right: 20px;
     }
     .shuo1{
        margin-top: 10px;
        font-size: 12px;
        color:#a2a1a1;
     }
     .shuo2{
        margin-top: 10px;
        font-size: 12px;
        color:#595bec;
     }
     .shuo2 span{
        color:#a2a1a1;
     }
</style>
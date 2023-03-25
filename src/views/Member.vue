<template>
    <div class="backmain">
       <div class="bg"><img src="../assets/images/bg2.jpg" alt=""></div>
    </div>

    <div class="context">
        <!-- 左边开始 -->
        <div class="context-left">
            <!-- 榜单块开始 -->
            <div class="bang">
                <div class="title">优选榜单</div>
                <div class="btabbar">
                    <div class="mr-2 card"  :class="{'bactive':btabbar==0}" @mouseover="bchange(0)">优选榜</div>
                    <div class="card">/</div>
                    <div class="ml-2 card" :class="{'bactive':btabbar==1}" @mouseover="bchange(1)">知识榜</div>
                    <div class="more ">查看更多></div>
                </div>
                <div v-for="(li,index) in bangdan" :key="index" v-show="btabbar==index">
                    <div class="message" >
                    <div class="message-left">
                        <img src="../assets/images/bangdan1.png" alt="">
                        <span class="message-title">{{li.name}}</span>
                        <span class="miaoshu">{{li.miaoshu}}</span>
                            <div> <span class="iconfont icon-recha"></span> <span class="message-author">作者：茶点故事</span></div>
                        </div>
                        <div class="message-right">
                            <img :src="li.img" alt="">
                        </div>
                </div>

                <!-- 渲染列表 -->
                <div class="liebiao" v-show="btabbar==index">
                    <div v-for="(it,index) in li.lists" :key="index"  class="li">
                            <img :src="it.tu">
                            <span class="na">{{it.name}}</span>
                            <span class="shuo">{{it.shuoming}}</span>
                            <div class="au">
                                <span class="iconfont icon-recha"></span>
                                <span>{{it.author}}</span>
                            </div>
                    </div>
                </div>
                
            </div>

            </div>
            <!-- 榜单结束 -->

            <!-- 明日之星开始 -->
            <div class="star ">
                <div class="title">优选榜单</div>
                <div class="">
                    <div class="mr-2 card"  :class="{'bactive':btabbar==0}" @mouseover="bchange(0)">优选榜</div>
                    <div class="card">/</div>
                    <div class="ml-2 card" :class="{'bactive':btabbar==1}" @mouseover="bchange(1)">知识榜</div>
                    <div class="more ">查看更多></div>
                </div>
            </div>
            <!-- 明日之星结束 -->

        </div>
        <!-- 左边结束 -->

        <!-- 右边开始 -->
        <div class="context-right"></div>
        <!-- 右边结束 -->
    </div>
</template>

<script setup>
import{ref,reactive,} from 'vue';

    const btabbar=ref(0);


    function bchange(index){
        btabbar.value=index;
    }


    const bangdan=reactive([
        {
            name:'灵异民宿',
            miaoshu:'为了英雄救美，我险些被人一酒瓶子爆头。 好在挨打是值得的，当晚我就成功和被救的小美女开房。 可是住的地方，好像有点儿诡异……',
            img:'src/assets/images/bang1.png',
            lists:[
                {
                    tu:'src/assets/images/book.png',
                    name:'春日将至，吾作新妇',
                    shuoming:'我第一次见到十二，我...',
                    author:'作者：茶点故事'
                },
                {
                    tu:'src/assets/images/book2.png',
                    name:'心悦君思君不配',
                    shuoming:'我第一次见到十二，我...',
                    author:'作者：茶点故事'
                },
                {
                    tu:'src/assets/images/book3.png',
                    name:' 二次攻略',
                    shuoming:'好不容易攻略到头，...',
                    author:'作者：茶点故事'
                },
                {
                    tu:'src/assets/images/book4.png',
                    name:' 总裁教子有方',
                    shuoming:'总裁让我带他儿子在...',
                    author:'作者：茶点故事'
                }
            ]
        },
        {
            name:'控制情绪，才能掌控自己',
            miaoshu:'人一旦缺乏自控力，就会沦为情绪的奴隶，世界上最厉害的本领就是能够管理好自己的情绪。',
            img:'src/assets/images/bang2.png',
            lists:[
                {
                    tu:'src/assets/images/book1-1.png',
                    name:'爱情保鲜计',
                    shuoming:'在爱情中，光靠努力',
                    author:'作者：茶点故事'
                },
                {
                    tu:'src/assets/images/book2-2.png',
                    name:'人生驿站：愿你不被生活',
                    shuoming:'人生上所有坚持，都是因...',
                    author:'作者：茶点故事'
                },
                {
                    tu:'src/assets/images/book3-3.png',
                    name:'  育儿心经',
                    shuoming:'孩子的言行，就是真实缩，...',
                    author:'作者：茶点故事'
                },
                {
                    tu:'src/assets/images/book4-4.png',
                    name:' 苏比童话镇：读懂宝宝',
                    shuoming:'圆圆有一个只装一支...',
                    author:'作者：茶点故事'
                }
            ]
        }
    ])
</script>

<style  scoped>
@import url("../assets/font/iconfont.css");
.backmain{
    width: 100%;
}
.bg{
    width: 100%;
    height: 360px;
}
.bg img{
    width: 100%;
    height: 360px;
}
.context{
    width: 1440px;
    height: 8418px;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}
.context-left{
    width: 625px;
    height: 8418px;
    margin-left: 220px; 
}
.context-right{
    width: 410px;
    height: 8418px;
}
/* 榜单开始 */
.bang{
    background-color: white;
}
.bang .title{
    font-size: 26px;
    font-weight: 600;
    color: #333333;
}
.bang .btabbar{
    margin-top: 11px;
    display: flex;
    flex-direction: row;
    position: relative;
    border-bottom: 1px solid #d5d4d4;
    padding-bottom: 8px;
}
.bang .btabbar .card{
    position: relative;
    height: 20px;
    padding-bottom: 10px;
    top: 9px;
}

.bang .more{
    position: absolute;
    right: 0;
    top: 9px;
    font-size: 12px;
    color: #B5B6B8;
}
.message{
    display: flex;
    flex-direction: row;
}

.message .message-left{
    margin-top: 20px;
    flex: 8;
    display: flex;
    flex-direction: column;
}
.message .message-left img
{
    margin-top: 15px;
    width: 40px;
    height: 37px;
}
.message .message-left  .message-title{
    max-width: 450px;
    font-size: 16px;
    line-height: 18px;
    font-weight: 500;
    margin-top: 10px;
    margin-bottom: 0;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.message .message-left  .miaoshu{
    max-width: 450px;
    max-height: 32px;
    font-size: 12px;
    line-height: 16px;
    color: #737373;
    margin-top: 12px;
    margin-bottom: 19px;
    background: #F8F8F8;
    border-radius: 2px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
}
.message .message-left   .message-author{
    font-size: 10px;
    margin: 0 0 0 5px;
}
.message .message-right{
    flex: 2;
    position: relative;
    margin-top: 15px;
}
.message .message-right img{
    position: absolute;
  
    border-radius: 5px;
    width: 114px;
    height: 154px;
    cursor: pointer;
}

.liebiao{
    margin-top: 20px;
    display: flex;
    flex-direction: row;
   
}
.li{
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.liebiao img{
    width: 114px;
    height: 154px;
}
.li .shuo{
    max-width: 110px;
    font-size: 12px;
    line-height: 12px;
    color: #737373;
    margin-top: 10px;
    margin-bottom: 15px;
    background: #F8F8F8;
    border-radius: 2px;
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.li .au{
    font-size: 10px;
    margin: 0 0 0 5px;
}
.li .na{

    font-size: 14px;
}
/* 榜单结束 */

.star{
    margin-top: 80px;
    background-color: white;
}
.star .title{
    font-size: 26px;
    font-weight: 600;
    color: #333333;
}
.star .btabbar{
    margin-top: 11px;
    display: flex;
    flex-direction: row;
    position: relative;
    border-bottom: 1px solid #d5d4d4;
    padding-bottom: 8px;
}



.bactive{
    color: #ea6f5a;
    border-bottom: 3px solid #ea6f5a;
}
.mr-2{
    margin-right: 20px;
}
.ml-2{
    margin-left: 20px;
}
.mt-3{
    margin-top: 30px;
}
</style>
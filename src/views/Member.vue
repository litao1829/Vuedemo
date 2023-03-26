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
                <div class="title">明日之星</div>
                <div class="star-tab">
                    <div class="tab-card" v-for="(tab,index) in startabs" :key="index" @mouseover="startab(index)">
                        <img :src="tab.img">
                        <div :class="{'staractive':starcurrent==index}" class="cardname">{{tab.name}}</div>
                    </div>
                </div>
                <div class="starpages" v-for="(page,index) in starpages" :key="index" v-show="starcurrent==index">
                    <div class="pageli" v-for="(list,idx) in page.lists" :key="idx">
                        <img :src="list.img" alt="">
                        <div style="width: 120px;">{{list.name}}</div>
                    </div>
                </div>
            </div>
            <!-- 明日之星结束 -->

        <!-- 更多精彩内容 开始-->
            <div class="wonderful">

                <div class="wontitle">更多精彩内容</div>

                <div class="content " >
                    <MemberInvitation class="mb-3" v-for="(invi,index) in invitations" :key="index" :item="invi"></MemberInvitation>
                </div>

            </div>
        <!-- 更多精彩内容结束 -->

        </div>
        <!-- 左边结束 -->

        <!-- 右边开始 -->
        <div class="context-right">

            <div class="user-status"> 
                <img class="bg" src="https://cdn2.jianshu.io/assets/vips/sidebar-bg-6c0c1f39076e703a879ceafe361b29c3.png" alt="">
                <div class="no-img"> </div>
                <span class="ykdl">游客登录</span>
                <div class="me">开通会员免费看</div>
                <img class="down" src="https://cdn2.jianshu.io/assets/vips/bottom-icons-676ec6266f544f17275d99901de97d29.png" alt="">
            </div>
        </div>
        <!-- 右边结束 -->
    </div>
</template>

<script setup>
import{ref,reactive,} from 'vue';
import MemberInvitation from '../components/MemberInvitation.vue';
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



    const starcurrent=ref(0);
    const startabs=reactive([
        {
            name:'烨舟',
            img:'src/assets/images/tabcard1.png'
        },
        {
            name:'千始',
            img:'src/assets/images/tabcard2.png'
        },
        {
            name:'春花flower',
            img:'src/assets/images/tabcard3.png'
        },
        {
            name:'一个惊鸿_',
            img:'src/assets/images/tabcard4.png'
        },
    ]);
    function startab(index){
        starcurrent.value=index;
    }

    const starpages=reactive([
        {
            lists:[
                {
                    name:'暴风骤雨的黑夜',
                    img:"https://upload.jianshu.io/collections/images/1977353/%E6%9A%B4%E9%A3%8E%E9%AA%A4%E9%9B%A8%E7%9A%84%E9%BB%91%E5%A4%9C.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'日历上的杀',
                    img:"https://upload.jianshu.io/collections/images/1977355/%E6%97%A5%E5%8E%86%E4%B8%8A%E7%9A%84%E6%9D%80.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'恐怖的美梦',
                    img:"https://upload.jianshu.io/collections/images/1977354/%E6%81%90%E6%80%96%E7%9A%84%E7%BE%8E%E6%A2%A6.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'永远不分开',
                    img:"https://upload.jianshu.io/collections/images/1977352/%E6%B0%B8%E8%BF%9C%E4%B8%8D%E5%88%86%E5%BC%80.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                }
            ]
        },
        {
            lists:[
                {
                    name:'情感试金石',
                    img:"https://upload.jianshu.io/collections/images/1977350/%E6%83%85%E6%84%9F%E8%AF%95%E9%87%91%E7%9F%B3.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'被欲望操控的人',
                    img:"https://upload.jianshu.io/collections/images/1977349/%E8%A2%AB%E6%AC%B2%E6%9C%9B%E6%93%8D%E6%8E%A7%E7%9A%84%E4%BA%BA.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'最后的夏日',
                    img:"https://upload.jianshu.io/collections/images/1977348/%E6%9C%80%E5%90%8E%E7%9A%84%E5%A4%8F%E6%97%A5.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'都市恋爱奇谭',
                    img:"https://upload.jianshu.io/collections/images/1977351/%E6%81%8B%E7%88%B1%E5%A5%87%E8%B0%AD.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                }
            ]
        },
        {
            lists:[
                {
                    name:'愿为裙下臣',
                    img:"https://upload.jianshu.io/collections/images/1977345/%E6%84%BF%E4%B8%BA%E8%A3%99%E4%B8%8B%E8%87%A3_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'恋上你的甜',
                    img:"https://upload.jianshu.io/collections/images/1977346/%E6%81%8B%E4%B8%8A%E4%BD%A0%E7%9A%84%E7%94%9C.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'青玉案',
                    img:"https://upload.jianshu.io/collections/images/1977344/%E9%9D%92%E7%8E%89%E6%A1%88.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'春雪迟',
                    img:"https://upload.jianshu.io/collections/images/1977343/%E6%98%A5%E9%9B%AA%E8%BF%9F.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                }
            ]
        },
        {
            lists:[
                {
                    name:'青春就要不服输',
                    img:"https://upload.jianshu.io/collections/images/1977340/%E9%9D%92%E6%98%A5%E5%B0%B1%E8%A6%81%E4%B8%8D%E6%9C%8D%E8%BE%93.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'绝口不提我爱你',
                    img:"https://upload.jianshu.io/collections/images/1977342/%E7%BB%9D%E5%8F%A3%E4%B8%8D%E6%8F%90%E6%88%91%E7%88%B1%E4%BD%A0_%E7%9C%8B%E5%9B%BE%E7%8E%8B.jpg?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                },
                {
                    name:'情人节这天，我想对你说',
                    img:"https://upload.jianshu.io/collections/images/1977341/%E6%83%85%E4%BA%BA%E8%8A%82%E8%BF%99%E5%A4%A9%EF%BC%8C%E6%88%91%E6%83%B3%E5%AF%B9%E4%BD%A0%E8%AF%B4.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp"
                }
            ]
        }
        ]);

    const invitations=reactive([
        {
            title:'情人竟是我自己',
            img:null,
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'不存在的第四人',
            img:'https://upload-images.jianshu.io/upload_images/22215249-436bfdf86c135819.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp',
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'骚扰',
            img:null,
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'我有罪',
            img:'https://upload-images.jianshu.io/upload_images/22215249-436bfdf86c135819.png?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp',
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'为了所谓的爱情，他把一条蛇放在了……',
            img:null,
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'矿场碎尸案',
            img:'https://upload-images.jianshu.io/upload_images/7906257-a07cebd2ac278590.jpg?imageMogr2/auto-orient/strip&imageView2/2/w/500/format/webp',
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'黄泉尸妆者',
            img:null,
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
        },
        {
            title:'新型骗婚:　我有两个丈夫',
            img:null,
            describe:'我的哥哥总是模仿我，除了穿衣打扮，甚至还要盖同样花色的被子，同一款式的水杯，甚至执意地跟我用同一款手机，吃同款食物。我很讨厌他。他是父母离婚后苦苦死缠烂打了父亲好多年的女人带来的儿子。说是儿子，更像是一件附属品。听父亲说，他自从高中从楼上被人推了下来之后，身体状况一落千丈，变得沉默寡言不说，无论是体力活还是脑力活都干不了。而他的母亲江阿姨是个有名的财主，只可惜鲜花一心扑在爱情上，对待儿子的温柔仅仅能够体现在每月准时到账的钱',
            see:19,
            dianzan:3
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


/* 明日之星开始 */
.star{
    margin-top: 80px;
    background-color: white;
}
.star .title{
    font-size: 26px;
    font-weight: 600;
    color: #333333;
    border-bottom: 1px solid #d5d4d4;
    padding-bottom: 24px;
}
.star .star-tab{
    margin-top: 30px;
    margin-left: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.star .star-tab .tab-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-right: 50px;
}
.star .star-tab .tab-card img{
    width: 56px;
    height: 56px;
    border-radius: 50%;
}
.cardname{
    font-size: 12px;
    width: 86px;
    height: 26px;
    line-height: 26px;
    position: absolute;
    top: 44px;
    text-align: center;
    border-radius: 25px;
    background-color: #f8f8f8;
}
.star  .starpages{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
}
.star  .starpages .pageli{
    margin-right: 10px;
    display: flex;
    flex-direction: column;
}
.star  .starpages .pageli img{
    border-radius: 5px;
    width: 114px;
    height: 154px;
}
/* 明日之星结束 */


/* 更多精彩开始 */
.wonderful{
    margin-top: 80px;
}
.wonderful .wontitle{
    font-size: 26px;
    font-weight: 600;
    color: #333333;
    border-bottom: 1px solid #d5d4d4;
    padding-bottom: 24px;
}
.wonderful  .content{
    margin-top:10px;
    display: flex;
    flex-direction: column;
}
/* 更多精彩结束 */


.user-status{
    width: 300px;
    height: 356px;
    background-size: cover;
    margin-left: 110px;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.user-status bg{
    width: 300px;
    height: 356px;
}
.no-img{
    background-color: #F0F0F0;
    width: 76px;
    height: 76px;
   top: 21px;
    border-radius: 50%;
    position: absolute;
}
.ykdl{
    position: absolute;
    top: 110px;
}
.me{
    position: absolute;
    width: 190px;
    height: 45px;
    border-radius: 25px;
    color: white;
    line-height: 45px;
    text-align: center;
    background-color: #ea6f5a;
    top: 170px;
}

.down{
    width: 266px;
    height: 107px;
    position: absolute;
    bottom: 0;
}



.bactive{
    color: #ea6f5a;
    border-bottom: 3px solid #ea6f5a;
}
.staractive{
    font-size: 12px;
    width: 86px;
    height: 26px;
    line-height: 26px;
    position: absolute;
    top: 44px;
    text-align: center;
    border-radius: 25px;
    color: white;
    background-color:#ea6f5a;
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
.mt-5{
    margin-top: 50px;
}

.mb-5{
    margin-bottom: 50px;
}
.mb-3{
    margin-bottom: 30px;
}
</style>
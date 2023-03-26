<template>
    <div>
        <TechnologInvitaion class="mb-3" v-for="(invi,index) in invitations" :key="index" :item="invi"></TechnologInvitaion>
    </div>
</template>

<script setup>
import{ref,reactive,} from 'vue';
import TechnologInvitaion from '../components/TechnologInvitaion.vue';

 const invitations=reactive([
        {
            title:'Android 架构之 MVI 完全体 | 重新审视 MVVM 之殇，PartialChange & Reducer 来拯救',
            img:null,
            describe:'这是 MVI 架构的第三篇，系列文章目录如下： Android 架构之 MVI 雏形 | 响应式编程 + 单向数据流 + 唯一可信数据源[https://juejin.cn/post/7087717',
            heat:2.4,
            author:' 我爱田Hebe',
            discuss:7,
            collect:18
        },
        {
            title:'现成的MVI框架——mavericks',
            img:null,
            describe:'前言 Android架构演变：MVC、MVP、MVVM、MVI。 新技术层出不穷，架构一天一个样。像我这种懒惰又不自律的人，能学习上最新的技术，就已经佩服我自己了。 所以造轮子是不可能造轮子的，这辈.',
            heat:2.5,
            author:' 小强闯江湖',
            discuss:0,
            collect:23
        },
        {
            title:'《iOS核心动画高级技巧》',
            img:'https://upload-images.jianshu.io/upload_images/1969836-4274b7ba0bd3be36.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240/format/webp',
            describe:'iOS Core Animation',
            heat:1.8,
            author:' iOS_修心',
            discuss:1,
            collect:6
        },
        {
            title:'Android中依赖版本统一管理',
            img:null,
            describe:'前言 在Android的实际开发中，我们会经常使用到多Module开发，而当我们修改一些版本信息或者SDK升级时，可能涉及多个Module都需要修改。 显然逐个修改Module中的build.gra',
            heat:2.3,
            author:'  静水红阳',
            discuss:2,
            collect:20
        },
        {
            title:'Android 10 分区存储',
            img:null,
            describe:'背景 以前，Android 开发者习惯在根目录建一个自己应用的文件夹，用于存放应用的数据。这样会导致用户卸载后，应用数据不会随之删除。导致手机文件特别混乱，长期占用空间，而且容易泄露用户隐私。 其实',
            heat:2.1,
            author:'teletian',
            discuss:0,
            collect:21
        },
        {
            title:'Android的ViewModel正确使用姿势？',
            img:'https://upload-images.jianshu.io/upload_images/26731569-a43a2c58466226b6.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240/format/webp',
            describe:'看了网上很多对于ViewModel的讲解，对比了官方的使用，自觉有点官方译文科普的意思，即使看很多，仍旧没有醍醐灌顶的感觉，于是，深入源码分析后，便想将对于ViewModel的使用以及定位做一些简单',
            heat:1.6,
            author:'仓鼠说他不会飞',
            discuss:0,
            collect:9
        },
        {
            title:'这几种常见的 JVM 调优场景，你知道吗？',
            img:null,
            describe:'假定你已经了解了运行时的数据区域和常用的垃圾回收算法，也了解了Hotspot支持的垃圾回收器。 一、cpu占用过高 cpu占用过高要分情况讨论，是不是业务上在搞活动，突然有大批的流量进来，而且活动结',
            heat:8.3,
            author:'Java码农',
            discuss:10,
            collect:96
        },
        {
            title:'这几种常见的 JVM 调优场景，你知道吗？',
            img:null,
            describe:'假定你已经了解了运行时的数据区域和常用的垃圾回收算法，也了解了Hotspot支持的垃圾回收器。 一、cpu占用过高 cpu占用过高要分情况讨论，是不是业务上在搞活动，突然有大批的流量进来，而且活动结',
            heat:8.3,
            author:'Java码农',
            discuss:10,
            collect:96
        },
    ])
</script>

<style  scoped>
.mb-3{
    margin-bottom: 30px;
}
</style>
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
            title:'untiy中各种坐标系及其转换',
            img:null,
            describe:'本文主要总结一下unity中最常用的几种坐标系。世界坐标系、局部坐标系、屏幕坐标系、视口坐标系。以及它们之间的相互转换。 1.世界坐标系 unity是使用的左手坐标系， 顾名思义，世界坐标系就是物体',
            heat:3.3,
            author:' 胡涂_aca7',
            discuss:2,
            collect:18
        },
        {
            title:'巧妙实现四大实时功能 | Linkis与Hudi结合的数据湖构建实践',
            img:null,
            describe:'背景介绍  Linkis是一款优秀的计算中间件，他对应用层屏蔽了复杂的底层计算引擎和存储方案，让大数据变得更加简单易用，同时也让运维变得更加方便。我们的平台很早就部署了WDS全家桶给业务用户和数据分',
            heat:2.9,
            author:' 康月牙',
            discuss:1,
            collect:10
        },
        {
            title:'《数据思维》：开启数据认知素养之旅，让数据变得有温度',
            img:null,
            describe:'最近，南京理工大学上了热搜。原因是，南京理工大学的贫困生比例较大，但很多贫困学生因为面子的原因，不愿意申请贫困助学金。于是南京理工大学用上了大数据分析，把每个月在食堂吃饭超过60顿，总消费不足420',
            heat:10.3,
            author:' 清风翻书',
            discuss:2,
            collect:39
        },
        {
            title:'《好好学习》领读Day4《引言：什么是知识》',
            img:null,
            describe:'今天我们一起共读引言部分： 1、什么是知识？ 也许你会对这个问题有些微词，我们都学了这多年知识了，难道还不知道吗？其实作者只是在面对现代社会中，想给各种各样的知识形态给一定新的界定。比如：我们在学校',
            heat:5.8,
            author:'晨星如希',
            discuss:1,
            collect:23
        },
        {
            title:'仿动森球形弯曲地表',
            img:null,
            describe:'老师:"注意观察这张图片..."小明:"嗯，我看到了，它一脸嫌弃的看着我..."老师:"不是让你看这个小精灵，你看到后面的房子没有，只能看到一个房顶，研究一下，看看怎么实现"小明:"好的老师，这两个',
            heat:1.1,
            author:'duanoldfive',
            discuss:1,
            collect:6
        },
        {
            title:'浅析iOS离屏渲染原理实现',
            img:'https://upload-images.jianshu.io/upload_images/26731569-a43a2c58466226b6.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240/format/webp',
            describe:'iOS离屏渲染你的掌握了吗',
            heat:2.7,
            author:' 一眼万年的星空',
            discuss:1,
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
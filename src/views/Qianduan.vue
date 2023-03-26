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
            title:'Spring Cloud alibaba之Feign',
            img:null,
            describe:'JAVA项目中如何实现接口调用？ HttpclientHttpclient是Apache Jakarta Common下的子项目，用来提供高效的、最新的、功能丰富的支持Http协议的客户端编程工具包',
            heat:2.5,
            author:' 江河湖海琴瑟琵琶',
            discuss:3,
            collect:26
        },
        {
            title:'Flutter控制组件的显示和隐藏的三种方式',
            img:null,
            describe:'方式一：if语句控制 方式二：Offstage组件 offstage属性控制控制child的显示和隐藏，true时：隐藏，false时：显示 方式三： Visibility visible属性控制c',
            heat:2.1,
            author:'莲花小怪兽',
            discuss:4,
            collect:7
        },
        {
            title:'Flutter Tab 切换时保留tab的状态',
            img:null,
            describe:'当我们在Flutter开发中，使用到Tabbar 切换页面时，我们会发现一个现象，就是我从 tab1 => tab2 = > tab3 ,控制台打印的日志，会发现 分别走了 tab1页面 tab2',
            heat:1.6,
            author:' Darleane',
            discuss:2,
            collect:11
        },
        {
            title:'javascript与typescript语法总结',
            img:null,
            describe:'一、JavaScript篇[https://www.w3school.com.cn/js/index.asp] JavaScript常见输出 window.alert() 弹出框警告 docume',
            heat:3.6,
            author:' Cola_Mr',
            discuss:1,
            collect:63
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
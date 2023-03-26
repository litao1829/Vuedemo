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
            title:'OC代码规范2',
            img:null,
            describe:'存取方法（Accessor Methods） 存取方法是指用来获取和设置类属性值的方法，属性的不同类型，对应着不同的存取方法规范： 命名存取方法时不要将动词转化为被动形式来使用： 可以使用can,s',
            heat:2.8,
            author:'梁森的简书',
            discuss:0,
            collect:16
        },
        {
            title:'iOS安全--APP代码签名机制',
            img:null,
            describe:'学习路线（内部分享内容） 加密解密（对称加密、非对称加密、混合加密） 单向散列函数 数字签名 证书 iOS签名机制 参考资料与图片来源：《图解密码技术第三版》[https://github.com/',
            heat:4.1,
            author:'Developer_Yancy',
            discuss:2,
            collect:41
        },
        {
            title:'29、C#的多线程Task的使用',
            img:null,
            describe:'使用案例 无返回值使用方式总结 Start方式启动 Run方式启动 Factory方式启动 综合示例 使用async/await的实现方式 有返回值使用方式 有返回值综合使用范例 注意的是，使用返回',
            heat:1.9,
            author:' GameObjectLgy',
            discuss:1,
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
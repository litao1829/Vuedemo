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
            title:'这几种常见的 JVM 调优场景，你知道吗？',
            img:null,
            describe:'假定你已经了解了运行时的数据区域和常用的垃圾回收算法，也了解了Hotspot支持的垃圾回收器。 一、cpu占用过高 cpu占用过高要分情况讨论，是不是业务上在搞活动，突然有大批的流量进来，而且活动结',
            heat:8.3,
            author:'Java码农',
            discuss:10,
            collect:96
        },
        {
            title:'Spring Cloud alibaba之Feign',
            img:null,
            describe:'JAVA项目中如何实现接口调用？ HttpclientHttpclient是Apache Jakarta Common下的子项目，用来提供高效的、最新的、功能丰富的支持Http协议的客户端编程工具包',
            heat:2.7,
            author:'山巅自相见',
            discuss:5,
            collect:29
        },
        {
            title:'实战篇-工具类实战',
            img:null,
            describe:'Hutool 文档：Hutool[https://loolly_admin.oschina.io/hutool-site/docs/#/] 一个小而全的Java工具类库，覆盖了Java开发底层代码的',
            heat:2.9,
            author:' jimmyz81',
            discuss:6,
            collect:14
        },
        {
            title:'【架构】异地多活分布式系统架构设计原理？',
            img:"https://upload-images.jianshu.io/upload_images/27963539-9b6fcd267df8629f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240/format/webp",
            describe:'在软件开发领域，「异地多活」是分布式系统架构设计的一座高峰，很多人经常听过它，但很少人理解其中的原理。 异地多活到底是什么？ 为什么需要异地多活？ 它到底解决了什么问题？ 究竟是怎么解决的？ 这些疑',
            heat:3.7,
            author:'Bogon',
            discuss:4,
            collect:30
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
            img:'https://upload-images.jianshu.io/upload_images/27963539-9b6fcd267df8629f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240/format/webp',
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
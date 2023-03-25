<template>
   <RouterLink class="li item-link flex flex-row ail-ite-c posi-re"
    :to="{name:'item-details',params:{id:item.id}}">
        <img :src="item.image" class="ml-3"/>
        <div class="flex flex-col jus-cent ml-3">
           <div class="font-big">{{item.title}}</div>
           <div class="mt-1">{{item.date}}</div>
        </div>
        <div class="status pos-abs" :class="{'red':item.finish,'green':!item.finish}">
            <div v-if="!item.finish" >进行中</div>
        <div v-else>已完结</div>
        </div>
   </RouterLink>
</template>

<script setup>
// import {ref,reactive} from 'vue'
defineProps({
    item:{
        type:Object,
        required:true,
    },
})
// const item=reactive({
//     title:'Vue3学习',
//     date:'2023-03-24'
// })
</script>

<style  scoped>
.li{
    width: 300px;
    height: 120px;
    border: 1px solid black;
    border-radius: 15px;
}
.li img{
    width: 60px;
    height: 60px;
}
    .posi-re{
        position: relative;
    }
    .pos-abs{
        position: absolute;
    }
    .flex{
        display: flex;
    }
    .flex-row{
        flex-direction: row;
    }
    .flex-col{
        flex-direction: column;
    }
    .jus-cent{
        justify-content: center;
    }
    .ail-ite-c{
        align-items: center;
    }
    .ml-3{
        margin-left: 30px;
    }
    .mt-1{
        margin-top: 10px;
    }
    .font-big{
        font-size: 26px;
        font-weight: 700;
    }
    .status{
        width: 80px;
        height: 40px;
        color: white;
        line-height: 40px;
        text-align: center;
        margin-left: 30%;
        font-weight: 700;
        border-radius: 15px;
        right: 10px;
    }
    .green{
        background-color: green;
    }
    .red{
        background-color: red;
    }
    .item-link{
        text-decoration: none;
        display: inline-block;
    }
   
</style>
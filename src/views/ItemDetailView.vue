<template>
    
    <div class="container posi-re">
        <div class=" font-big" >{{item.title}}</div>
        <img :src="item.image" alt="" class="mt-3">
        <div class="mt-3">{{item.date}}</div>
        <div class="status pos-abs" :class="{'red':item.finish,'green':!item.finish}">
            <div v-if="!item.finish" >进行中</div>
        <div v-else>已完结</div>
        </div>
    </div>
</template>

<script setup>
import {ref,reactive, onMounted,onBeforeMount} from 'vue';
import ItemService from '../services/ItemService.js';
const props=defineProps({
    id:{
        type:String,
        required:true
    }
})
let item=ref(null);

onBeforeMount(()=>{
    ItemService.getItem(props.id).then((resp)=>{
        console.log(resp.data)
        item.value=resp.data;
        console.log(item.value)
    })
})

onMounted(()=>{
   
});

    


</script>

<style  scoped>
.container{
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
}
.container img{
    width: 150px;
    height: 150px;
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
    .mt-3{
        margin-top: 30px;
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
        top: 420px;
        left: 60px;
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
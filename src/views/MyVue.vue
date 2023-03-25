<template>
   
    <div v-for="it in toitems" :key="it.id" class="mt-1">
        <TodoItem :item="it"></TodoItem>
   </div>



   
   <!-- <div class="li flex flex-row ail-ite-c">
        <img src="../assets/images/1.png" class="ml-3"/>
        <div class="flex flex-col jus-cent ml-3">
           <div class="font-big">aaaa</div>
           <div class="mt-1">aaaa</div>
        </div>
        <div v-show="true" class="status" >进行中</div>
        <div v-show="false">已完结</div>
   </div> -->
   
</template>

<script setup> 
import TodoItem from '../components/TodoItem.vue';
import {ref,reactive, onMounted} from 'vue';
import ItemService from '../services/ItemService.js';
// const toitems=reactive([
//     {id:1,
//     title:'Vue3学习',
//     date:'2023-03-24',
//     image:'/src/assets/images/1.png',
//     finish:true,
//     },
//     {
//     id:2,
//     title:'Vue3学习',
//     date:'2023-03-24',
//     image:'/src/assets/images/1.png',
//     finish:false,
//     },
//     {
//     id:3,
//     title:'Vue3学习',
//     date:'2023-03-24',
//     image:'/src/assets/images/3.png',
//     finish:true,
//     },
//     {
//     id:4,
//     title:'Vue3学习',
//     date:'2023-03-24',
//     image:'/src/assets/images/4.png',
//     finish:false,
//     }
//     ]);
    // onMounted(()=>{
    //     axios.get('http://localhost:3000/items').
    //     then((resp)=>{
    //         console.log(resp.data);
    //     });
    // });
const toitems=ref(null)
    onMounted(()=>{
    ItemService.getTodoItems().then((resp)=>{
        toitems.value=resp.data
    });
});

</script>

<style   scoped>
.li{
    width: 500px;
    height: 120px;
    border: 1px solid black;
    border-radius: 15px;
}
.li img{
    width: 60px;
    height: 60px;
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
    }
    .green{
        background-color: green;
    }
    .red{
        background-color: red;
    }
</style>
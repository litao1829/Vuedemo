<template>
    <div class="card">
        <div class="card-first">
          <div>{{item.title}}</div>
        </div>

        <div class="card-seconde">
            <span class="describe">{{text}}...</span>
            <img v-if="item.img!=null" :src="item.img" alt="">
        </div>

        <div class="card-thrid">
            <div >
                <span class="iconfont icon-diamond mr-1 ac"></span> 
                <span class="ac">{{item.heat}}</span>
            </div>
            <div>
                <span class="ot">{{item.author}}</span>
            </div>
            <div>
                <span class="iconfont icon-pinglun mr-1 ot"></span>
                <span class="ot">{{item.discuss}}</span>
            </div>
            <div>
                <span class="iconfont icon-shoucang mr-1 ot"></span>
                <span class="ot">{{item.collect}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref,computed} from "vue";
const props= defineProps({
    item:{
        trpe:Object,
        required:true
    }
})
const i=props.item.describe;
const text=computed(()=>{
    console.log("a:"+i);
    return i.substring(0,80);
    
})
</script>

<style  scoped>
@import url("../assets/font/iconfont.css");
.card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    padding-bottom: 15px;
    border-bottom: 1px solid #f0f0f0;
    margin-top: 25px;
}
.card-first div{
    font-size:18px;
    font-weight: 550;
}
.card-seconde{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
.card-seconde .describe{
    margin-top: 15px;
    flex:8;
    font-size: 13px;
    color: #999;
    margin-right: 10px;
}
.card-seconde img{
    flex: 3;
    width: 130px;
    height: 90px;
    border-radius: 15px;
    margin-right: 10px;
}
.card-thrid{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.card-thrid div{
    width: 60px;
    margin-right: 30px;
}
.card-thrid span{
    font-size: 10px;
}
.mr-1{
    margin-right: 5px;
}
.ac{
    color: #EA6F5A;
    font-size: 10px;
}
.ot{
    color: #b4b4b4;
}
</style>